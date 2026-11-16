'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef } from 'react'
import type { GalleryImage } from '@/data/gallery'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@/components/ui/Icons'

/** Popup xem ảnh lớn: Esc đóng, ← → chuyển ảnh, khoá cuộn trang khi mở. */
export function GalleryLightbox({
  images,
  index,
  onChange,
  onClose,
}: {
  images: GalleryImage[]
  index: number
  onChange: (i: number) => void
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const count = images.length
  const prev = useCallback(() => onChange((index - 1 + count) % count), [index, count, onChange])
  const next = useCallback(() => onChange((index + 1) % count), [index, count, onChange])
  const img = images[index]

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh phóng to"
      data-surface="dark"
      className="fixed inset-0 z-[60] flex flex-col bg-primary-dark"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-4 py-4 text-white sm:px-6">
        <span className="text-sm font-semibold text-white/80">
          {index + 1} / {count}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Đóng"
          className="grid size-11 place-items-center rounded-xl bg-white/10 transition-colors duration-200 hover:bg-white/20"
        >
          <CloseIcon className="size-6" />
        </button>
      </div>

      <div className="relative flex-1 px-4 sm:px-20" onClick={(e) => e.stopPropagation()}>
        <div key={img.src} className="lightbox-fade relative size-full">
          <Image src={img.src} alt={img.alt} fill sizes="100vw" className="object-contain" />
        </div>
        {count > 1 && (
          <>
            <NavButton side="left" onClick={prev} label="Ảnh trước">
              <ChevronLeftIcon className="size-6" />
            </NavButton>
            <NavButton side="right" onClick={next} label="Ảnh sau">
              <ChevronRightIcon className="size-6" />
            </NavButton>
          </>
        )}
      </div>

      <p className="px-4 py-5 text-center text-base text-white/85">{img.alt}</p>
    </div>
  )
}

function NavButton({
  side,
  onClick,
  label,
  children,
}: {
  side: 'left' | 'right'
  onClick: () => void
  label: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white transition-colors duration-200 hover:bg-white/30 active:scale-95 ${
        side === 'left' ? 'left-2 sm:left-5' : 'right-2 sm:right-5'
      }`}
    >
      {children}
    </button>
  )
}
