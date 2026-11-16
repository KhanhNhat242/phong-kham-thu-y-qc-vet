import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'
import { HeroSection } from '@/components/sections/HeroSection'
import { UspSection } from '@/components/sections/UspSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { DoctorsSection } from '@/components/sections/DoctorsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { PostsSection } from '@/components/sections/PostsSection'
import { BookingSection } from '@/components/sections/BookingSection'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} – Phòng khám thú y Định Công, Hà Nội` },
  description:
    'Phòng khám thú y Định Công, Hà Nội: khám và tư vấn sức khỏe, xét nghiệm máu, siêu âm – X-quang, phẫu thuật thú y và spa cho chó mèo. Đặt lịch nhanh qua hotline, Zalo.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <HeroSection />
      <UspSection />
      <ServicesSection />
      <DoctorsSection />
      <GallerySection />
      <PostsSection />
      <BookingSection />
    </>
  )
}
