'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import type { GalleryCategory, GalleryImage } from '@/data/gallery'
import { ArrowRightIcon } from '@/components/ui/Icons'
import { GalleryAllLayout } from './GalleryAllLayout'
import { GalleryBounce } from './GalleryBounce'
import { GalleryLightbox } from './GalleryLightbox'

type Filter = 'all' | GalleryCategory

const ALL_COUNT = 7

/**
 * Bộ lọc thư viện ảnh:
 * - "Tất cả": bố cục 5 cột kiểu bìa hồ sơ (GalleryAllLayout).
 * - Các nhóm còn lại: hiệu ứng BounceCards (React Bits).
 * Bấm ảnh → lightbox.
 */
export function GalleryGrid({
  images,
  categories,
}: {
  images: GalleryImage[]
  categories: { value: Filter; label: string }[]
}) {
  const [filter, setFilter] = useState<Filter>('all')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const visible = useMemo(
    () => (filter === 'all' ? images.slice(0, ALL_COUNT) : images.filter((img) => img.category === filter)),
    [filter, images],
  )

  return (
    <>
      <div role="tablist" aria-label="Lọc ảnh theo nhóm" className="mb-10 flex flex-wrap justify-center gap-1.5 sm:gap-3">
        {categories.map((c) => {
          const active = c.value === filter
          return (
            <button
              key={c.value}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls="thu-vien-anh-noi-dung"
              onClick={() => {
                setFilter(c.value)
                setOpenIndex(null)
              }}
              className={`h-11 rounded-full px-3 text-[13px] font-bold transition-colors duration-200 active:scale-95 sm:px-6 sm:text-sm ${active ? 'bg-primary text-white' : 'bg-white text-primary ring-1 ring-line hover:bg-primary-light'
                }`}
            >
              {c.label}
            </button>
          )
        })}
      </div>

      <div id="thu-vien-anh-noi-dung" role="tabpanel">
        {filter === 'all' ? (
          <GalleryAllLayout images={visible} onOpen={setOpenIndex} />
        ) : (
          <div key={filter}>
            <GalleryBounce images={visible} onOpen={setOpenIndex} />
            <p className="mt-6 text-center text-[15px] text-muted">
              Di chuột hoặc chạm vào ảnh để xem, bấm để phóng to.
            </p>
          </div>
        )}
      </div>

      {openIndex !== null && visible[openIndex] && (
        <GalleryLightbox images={visible} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
      )}
    </>
  )
}
