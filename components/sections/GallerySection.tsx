import { galleryCategories, galleryImages } from '@/data/gallery'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GalleryGrid } from './GalleryGrid'

/** Section 5 – Thư viện ảnh thực tế "Các bé tại QC VET". Nền xanh nhạt. */
export function GallerySection() {
  return (
    <section id="thu-vien-anh" aria-labelledby="gallery-title" className="bg-surface py-14 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleId="gallery-title"
          label=""
          align="center"
          title="Các bé đáng yêu tại QC VET"
          description="Những khoảnh khắc thật tại phòng khám: các bé được thăm khám, chăm sóc và làm đẹp mỗi ngày trong không gian sạch sẽ."
        />

        <GalleryGrid images={galleryImages} categories={galleryCategories} />

      </div>
    </section>
  )
}
