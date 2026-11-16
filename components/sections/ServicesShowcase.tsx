'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Service } from '@/data/services'
import { noOrphan } from '@/lib/typography'
import { BookServiceLink } from '@/components/ui/BookServiceLink'
import { CalendarIcon } from '@/components/ui/Icons'

/**
 * Dải thẻ dịch vụ (REQUIREMENTS 6.2 – ngoại lệ Dịch vụ), bố cục theo ảnh mẫu khách gửi:
 * một hàng thẻ sát nhau, thẻ chính to (gần vuông) ở vị trí thứ 2 từ trái, thẻ phụ nhỏ hai bên;
 * dưới là thanh tiến trình + số thứ tự.
 * - Desktop + cho phép chuyển động: section được ghim; cuộn trang → thẻ kế tiếp trượt từ phải sang
 *   và to dần thành thẻ chính. Chữ chỉ đè lên thẻ chính.
 * - Desktop + giảm chuyển động: không ghim, bấm số / thẻ để đổi (không hiệu ứng).
 * - Mobile / tablet: thẻ ảnh xếp dọc, mỗi thẻ có chữ.
 */

/** Kích thước thẻ (px) trên desktop */
const ACTIVE = { w: 440, h: 440 }
const IDLE = { w: 250, h: 210 }
/** Mép trái của thẻ chính trong khung (chừa chỗ cho 1 thẻ phụ bên trái) */
const ANCHOR_X = 250
/** Chiều cao vùng cuộn cho mỗi lần chuyển thẻ */
const SCROLL_PER_STEP = 60 // svh

const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))
const ease = (t: number) => t * t * (3 - 2 * t)

type CardBox = { x: number; w: number; h: number; near: number }

/** Vị trí & kích thước từng thẻ khi tiến độ là p (0 → n-1). Hàm thuần — dùng được cả khi render server. */
function layout(n: number, p: number): CardBox[] {
  const near = Array.from({ length: n }, (_, i) => ease(Math.max(0, 1 - Math.abs(p - i))))
  const widths = near.map((t) => lerp(IDLE.w, ACTIVE.w, t))
  // Vị trí "con trỏ" p trên hàng thẻ: tổng độ rộng các thẻ trước nó + phần lẻ của thẻ hiện tại
  const k = clamp(Math.floor(p), 0, n - 1)
  const f = p - k
  let before = 0
  for (let j = 0; j < k; j++) before += widths[j]
  const shift = before + f * widths[k]
  let x = ANCHOR_X - shift
  return widths.map((w, i) => {
    const box = { x, w, h: lerp(IDLE.h, ACTIVE.h, near[i]), near: near[i] }
    x += w
    return box
  })
}

export function ServicesShowcase({ services }: { services: Service[] }) {
  const n = services.length
  const [reduce, setReduce] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduce(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <>
      {/* Mobile / tablet */}
      <ul className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:hidden">
        {services.map((s, i) => (
          <li
            key={s.slug}
            className={`relative h-[420px] overflow-hidden rounded-3xl bg-primary-dark ${
              i === n - 1 ? 'sm:col-span-2' : ''
            }`}
          >
            <CardImage service={s} />
            <CardContent service={s} visible />
          </li>
        ))}
      </ul>

      {/* Desktop */}
      <div className="hidden lg:block">
        {reduce ? (
          <Strip services={services} progress={current} onSelect={setCurrent} />
        ) : (
          <ScrollStrip services={services} />
        )}
      </div>
    </>
  )
}

/** Desktop: ghim section, tiến độ cuộn quyết định thẻ chính */
function ScrollStrip({ services }: { services: Service[] }) {
  const n = services.length
  const wrapRef = useRef<HTMLDivElement>(null)
  const [p, setP] = useState(0)

  const headerH = () =>
    parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--qc-header-h')) || 80

  useEffect(() => {
    let raf = 0
    const tick = () => {
      raf = 0
      const wrap = wrapRef.current
      if (!wrap || !wrap.offsetParent) return
      const h = headerH()
      const rect = wrap.getBoundingClientRect()
      const total = wrap.offsetHeight - (window.innerHeight - h)
      const t = total > 0 ? clamp((h - rect.top) / total, 0, 1) : 0
      setP(t * (n - 1))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }
    tick()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [n])

  /** Bấm số / thẻ phụ → cuộn tới vị trí của thẻ đó */
  const goTo = useCallback(
    (i: number) => {
      const wrap = wrapRef.current
      if (!wrap) return
      const h = headerH()
      const total = wrap.offsetHeight - (window.innerHeight - h)
      const top = window.scrollY + wrap.getBoundingClientRect().top - h
      window.scrollTo({ top: top + (total * i) / (n - 1) + 1, behavior: 'smooth' })
    },
    [n],
  )

  return (
    <div ref={wrapRef} className="relative" style={{ height: `calc(100svh + ${(n - 1) * SCROLL_PER_STEP}svh)` }}>
      <div className="sticky top-[var(--qc-header-h)] flex h-[calc(100svh-var(--qc-header-h))] items-center">
        <Strip services={services} progress={p} onSelect={goTo} />
      </div>
    </div>
  )
}

/** Hàng thẻ + thanh tiến trình, vẽ theo `progress` (0 → n-1) */
function Strip({
  services,
  progress,
  onSelect,
}: {
  services: Service[]
  progress: number
  onSelect: (i: number) => void
}) {
  const n = services.length
  const boxes = layout(n, progress)
  const activeIndex = clamp(Math.round(progress), 0, n - 1)

  return (
    <div className="mx-auto w-full max-w-7xl px-8">
      {/* Hàng thẻ — căn giữa theo chiều dọc như ảnh mẫu */}
      <div className="relative overflow-hidden" style={{ height: ACTIVE.h + 40 }}>
        <ul>
          {services.map((s, i) => {
            const b = boxes[i]
            const isActive = i === activeIndex
            return (
              <li
                key={s.slug}
                className="absolute top-1/2 overflow-hidden bg-primary-dark will-change-transform"
                style={{
                  left: 0,
                  width: b.w,
                  height: b.h,
                  transform: `translate3d(${b.x}px, -50%, 0)`,
                  zIndex: Math.round(b.near * 10) + 1,
                  boxShadow: `0 ${24 * b.near}px ${48 * b.near}px rgb(11 61 145 / ${0.22 * b.near})`,
                }}
              >
                <CardImage service={s} />
                {/* Thẻ phụ: cả thẻ là nút để chọn */}
                {!isActive && (
                  <button
                    type="button"
                    onClick={() => onSelect(i)}
                    aria-label={`Xem dịch vụ ${s.name}`}
                    className="absolute inset-0 cursor-pointer"
                  />
                )}
                <CardContent service={s} visible={isActive} opacity={clamp((b.near - 0.55) / 0.35, 0, 1)} />
              </li>
            )
          })}
        </ul>
      </div>

      {/* Thanh tiến trình + số thứ tự (góc dưới phải như ảnh mẫu) */}
      <div className="mt-6 flex items-center justify-end gap-6">
        <div aria-hidden="true" className="relative h-0.5 w-56 overflow-hidden rounded-full bg-line">
          <span
            className="absolute inset-y-0 left-0 rounded-full bg-accent"
            style={{ width: `${(n > 1 ? progress / (n - 1) : 1) * 100}%` }}
          />
        </div>
        <ol className="flex items-baseline gap-3" aria-label="Chọn dịch vụ">
          {services.map((s, i) => {
            const isActive = i === activeIndex
            return (
              <li key={s.slug}>
                <button
                  type="button"
                  onClick={() => onSelect(i)}
                  aria-label={`Dịch vụ ${i + 1}: ${s.name}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`grid min-h-11 min-w-7 place-items-center font-extrabold tabular-nums transition-[color,font-size] duration-200 ${
                    isActive ? 'text-[34px] text-ink' : 'text-lg text-muted hover:text-ink'
                  }`}
                >
                  {i + 1}
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

function CardImage({ service }: { service: Service }) {
  return (
    <>
      <Image
        src={service.image.src}
        alt={service.image.alt}
        fill
        sizes="(min-width: 1024px) 440px, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
    </>
  )
}

/** Chữ đè lên ảnh — chỉ hiện ở thẻ chính (desktop) */
function CardContent({ service, visible, opacity = 1 }: { service: Service; visible: boolean; opacity?: number }) {
  return (
    <div
      inert={!visible}
      aria-hidden={!visible || undefined}
      className="absolute inset-0 flex flex-col justify-end"
      style={{ opacity: visible ? Math.max(opacity, 0.001) : 0 }}
    >
      {/* Lớp phủ tối phía dưới để chữ trắng đủ tương phản */}
      <div className="absolute inset-0 bg-linear-to-t from-primary-dark/95 via-primary-dark/45 to-transparent" />
      <div className="relative p-6 text-white sm:p-8">
        <h3 className="text-2xl leading-tight font-extrabold sm:text-[30px]">{noOrphan(service.name)}</h3>
        <p className="mt-2 text-base leading-relaxed text-white/90">{noOrphan(service.shortDescription)}</p>
        <BookServiceLink
          serviceSlug={service.slug}
          className="mt-5 inline-flex h-11 items-center gap-1.5 rounded-full bg-accent px-5 text-[15px] font-bold whitespace-nowrap text-white ring-2 ring-white transition-[background-color,transform] duration-200 hover:bg-accent-dark active:scale-[0.98]"
        >
          <CalendarIcon className="size-4" />
          Đặt lịch
        </BookServiceLink>
      </div>
    </div>
  )
}
