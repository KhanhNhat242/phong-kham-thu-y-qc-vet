'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import type { Doctor } from '@/data/doctors'
import { siteConfig } from '@/lib/site-config'
import { noOrphan } from '@/lib/typography'
import { ArrowRightIcon } from '@/components/ui/Icons'

const DESKTOP_QUERY = '(min-width: 64rem)'
const REDUCED_QUERY = '(prefers-reduced-motion: reduce)'

const headerOffset = () =>
  parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--qc-header-h')) || 80

/**
 * Biến đổi cho thẻ thứ i khi vị trí cuộn của chồng thẻ là `position` (0 → n-1).
 * d = i - position: d < 0 là thẻ đang trượt xuống rời đi, d ≥ 0 là thẻ còn trong chồng.
 */
function cardStyle(index: number, position: number) {
  const d = index - position
  if (d < 0) {
    // Trượt xuống rời đi: giữ đặc tới 60% quãng đường rồi mới mờ hẳn
    const e = Math.min(-d, 1)
    return {
      transform: `translate3d(0, ${e * 120}%, 0) rotate(${e * 8}deg)`,
      opacity: e < 0.6 ? 1 : Math.max(0, 1 - (e - 0.6) / 0.4),
      filter: 'none',
    }
  }
  // Trong chồng: lệch và xoay dần về sau, tối nhẹ theo độ sâu; từ lớp thứ 3 trở đi ẩn
  const depth = Math.min(d, 3)
  return {
    transform: `translate3d(${-depth * 34}px, ${-depth * 22}px, 0) rotate(${-depth * 5}deg) scale(${1 - depth * 0.05})`,
    opacity: d <= 2.4 ? 1 : Math.max(0, (3 - d) / 0.6),
    filter: `brightness(${1 - depth * 0.12})`,
  }
}

function cssVars(index: number, position: number): CSSProperties {
  const { transform, opacity, filter } = cardStyle(index, position)
  return { '--card-tf': transform, '--card-op': String(opacity), '--card-filter': filter } as CSSProperties
}

/**
 * Đội ngũ dạng chồng thẻ cuộn (REQUIREMENTS 6.2 – ngoại lệ Đội ngũ).
 * Desktop: cột trái (tiêu đề + danh sách vai trò) và cột phải (chồng thẻ) cùng dính trong vùng cuộn
 * cao n × 70svh; tiến độ cuộn quyết định thẻ nào ở trên cùng.
 * Mobile và prefers-reduced-motion: thẻ xếp lưới bình thường.
 */
export function DoctorsDeck({ doctors, header, footer }: { doctors: Doctor[]; header: ReactNode; footer?: ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLLIElement | null)[]>([])
  const [active, setActive] = useState(0)
  const [interactive, setInteractive] = useState(false)
  const count = doctors.length

  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_QUERY)
    const reduced = window.matchMedia(REDUCED_QUERY)
    let frame = 0

    const update = () => {
      frame = 0
      const wrap = wrapRef.current
      if (!wrap) return
      const h = headerOffset()
      const rect = wrap.getBoundingClientRect()
      const scrollable = rect.height - (window.innerHeight - h)
      const progress = scrollable > 0 ? Math.min(Math.max((h - rect.top) / scrollable, 0), 1) : 0
      const position = progress * (count - 1)
      cardRefs.current.forEach((card, index) => {
        if (!card) return
        const { transform, opacity, filter } = cardStyle(index, position)
        card.style.setProperty('--card-tf', transform)
        card.style.setProperty('--card-op', String(opacity))
        card.style.setProperty('--card-filter', filter)
      })
      setActive((current) => {
        const next = Math.min(Math.round(position), count - 1)
        return next === current ? current : next
      })
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    const sync = () => {
      const enabled = desktop.matches && !reduced.matches
      setInteractive(enabled)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (enabled) {
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
        update()
      }
    }

    sync()
    desktop.addEventListener('change', sync)
    reduced.addEventListener('change', sync)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      desktop.removeEventListener('change', sync)
      reduced.removeEventListener('change', sync)
    }
  }, [count])

  /** Cuộn tới vị trí để thẻ thứ index nằm trên cùng. */
  function goTo(index: number) {
    const wrap = wrapRef.current
    if (!wrap) return
    const h = headerOffset()
    const rect = wrap.getBoundingClientRect()
    const scrollable = rect.height - (window.innerHeight - h)
    const top = window.scrollY + rect.top
    const target = top - h + (index / (count - 1)) * scrollable + 1
    const smooth = !window.matchMedia(REDUCED_QUERY).matches
    window.scrollTo({ top: target, behavior: smooth ? 'smooth' : 'auto' })
  }

  return (
    <div
      ref={wrapRef}
      style={{ '--deck-count': count } as CSSProperties}
      className="lg:h-[calc(var(--deck-count)*70svh)] motion-reduce:lg:h-auto"
    >
      <div className="grid gap-10 lg:sticky lg:top-[var(--qc-header-h)] lg:h-[calc(100svh-var(--qc-header-h))] lg:grid-cols-12 lg:items-center lg:gap-8 motion-reduce:lg:static motion-reduce:lg:h-auto">
        {/* Cột trái */}
        <div className="lg:col-span-5">
          {header}
          <ol className="mt-8 hidden border-t border-line lg:block motion-reduce:lg:hidden">
            {doctors.map((doctor, index) => {
              const isActive = index === active
              return (
                <li key={doctor.slug} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => goTo(index)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group flex min-h-13 w-full items-center gap-4 text-left text-lg transition-colors duration-200 ${
                      isActive ? 'font-bold text-primary' : 'font-medium text-muted hover:text-ink'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-0.5 shrink-0 rounded-full transition-[width,background-color] duration-300 ${
                        isActive ? 'w-8 bg-accent' : 'w-3 bg-line'
                      }`}
                    />
                    {doctor.role}
                  </button>
                </li>
              )
            })}
          </ol>
          {footer && <div className="mt-8">{footer}</div>}
        </div>

        {/* Cột phải: chồng thẻ */}
        <div className="lg:col-span-6 lg:col-start-7 lg:flex lg:justify-center">
          <ul className="grid gap-5 sm:grid-cols-2 lg:relative lg:block lg:h-[min(32rem,calc(100svh-var(--qc-header-h)-5rem))] lg:w-[26rem] xl:h-[min(37rem,calc(100svh-var(--qc-header-h)-5rem))] xl:w-[30rem] motion-reduce:lg:grid motion-reduce:lg:h-auto motion-reduce:lg:w-auto motion-reduce:lg:grid-cols-3">
            {doctors.map((doctor, index) => {
              const hidden = interactive && index !== active
              return (
                <li
                  key={doctor.slug}
                  ref={(node) => {
                    cardRefs.current[index] = node
                  }}
                  inert={hidden}
                  aria-hidden={hidden ? true : undefined}
                  style={{ ...cssVars(index, 0), zIndex: count - index }}
                  className={`lg:absolute lg:inset-0 lg:[filter:var(--card-filter)] lg:[opacity:var(--card-op)] lg:[transform:var(--card-tf)] lg:will-change-transform motion-reduce:lg:static motion-reduce:lg:[filter:none] motion-reduce:lg:[opacity:1] motion-reduce:lg:[transform:none] ${
                    index === count - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <DoctorCard doctor={doctor} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="relative isolate flex aspect-[4/5] h-full w-full flex-col overflow-hidden rounded-3xl bg-primary-dark text-white shadow-soft-lg lg:aspect-auto">
      {/* Ảnh phủ ~68% phía trên thẻ */}
      <div className="absolute inset-x-0 top-0 -z-20 h-[68%]">
        <Image
          src={doctor.image.src}
          alt={doctor.image.alt}
          fill
          sizes="(min-width: 1280px) 480px, (min-width: 1024px) 416px, (min-width: 640px) 50vw, 100vw"
          className={`object-cover ${doctor.image.position}`}
        />
      </div>
      {/* Lớp nền xanh đậm dưới chữ để chữ trắng đủ tương phản */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[68%] bg-linear-to-t from-primary-dark from-45% via-primary-dark/85 to-transparent"
      />

      <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
        Ảnh minh hoạ
      </span>

      <div className="mt-auto p-6 sm:p-7 xl:p-9">
        <p className="text-sm font-semibold text-white/80">{noOrphan(doctor.scope)}</p>
        <h3 className="mt-1 text-[1.625rem] leading-tight font-bold tracking-[-0.015em] xl:text-[2rem]">{noOrphan(doctor.role)}</h3>
        <p className="mt-3 text-base leading-relaxed text-white/90 xl:text-lg">{noOrphan(doctor.description)}</p>
        <Link
          href={`/#${siteConfig.bookingAnchor}`}
          className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-accent px-5 font-bold text-white ring-2 ring-white transition-[background-color,scale] duration-200 hover:bg-accent-dark active:scale-[0.97] active:duration-75"
        >
          Đặt lịch khám
          <span className="sr-only"> với {doctor.role.toLowerCase()}</span>
          <ArrowRightIcon className="size-5" />
        </Link>
      </div>
    </article>
  )
}
