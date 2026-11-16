'use client'

import { useEffect, useRef, useState } from 'react'
import type { GalleryImage } from '@/data/gallery'
import BounceCards from '@/components/ui/BounceCards/BounceCards'

/** Cấu hình gốc theo yêu cầu (React Bits), thiết kế cho khung rộng 500px */
const BASE = {
  containerWidth: 500,
  containerHeight: 320,
  cardSize: 200,
  spread: 85,
  pushDistance: 160,
}

/**
 * Bọc BounceCards để co giãn theo bề rộng thật (tránh tràn ở mobile 375px).
 * Bấm thẻ → mở lightbox.
 */
export function GalleryBounce({ images, onOpen }: { images: GalleryImage[]; onOpen: (i: number) => void }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      setScale(Math.min(1.2, entry.contentRect.width / BASE.containerWidth))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const s = (v: number) => Math.round(v * Math.min(scale, 1.2))

  return (
    <div ref={wrapRef} className="mx-auto flex w-full max-w-[600px] justify-center">
      <BounceCards
        key={images.map((i) => i.src).join('|')}
        images={images.map((img) => ({ src: img.src, alt: img.alt }))}
        containerWidth={s(BASE.containerWidth)}
        containerHeight={s(BASE.containerHeight)}
        cardSize={s(BASE.cardSize)}
        spread={s(BASE.spread)}
        rotation={10}
        arc={0}
        pushDistance={s(BASE.pushDistance)}
        hoverScale={1.06}
        bounciness={0.6}
        animationDelay={0.5}
        animationStagger={0.06}
        borderWidth={5}
        borderColor="white"
        radius={25}
        shadow
        enableHover
        sizes={`${s(BASE.cardSize)}px`}
        onCardClick={onOpen}
      />
    </div>
  )
}
