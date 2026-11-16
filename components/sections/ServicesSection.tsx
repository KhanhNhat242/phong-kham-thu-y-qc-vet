import { services } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServicesShowcase } from './ServicesShowcase'

/**
 * Section 3 – 5 dịch vụ chính. Nền xanh nhạt.
 * Dải thẻ trượt & phóng to theo cuộn (ServicesShowcase) — REQUIREMENTS 6.2, ngoại lệ Dịch vụ.
 */
export function ServicesSection() {
  return (
    <section id="dich-vu" aria-labelledby="services-title" className="bg-surface py-14 lg:pt-24 lg:pb-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          titleId="services-title"
          label="Dịch vụ"
          title="Khám, chẩn đoán, điều trị và làm đẹp cho chó mèo"
          description="Mỗi dịch vụ đều có quy trình rõ ràng và được tư vấn kỹ trước khi thực hiện. Chi phí báo sau khi bác sĩ thăm khám."
          className="mb-10 lg:mb-12"
        />
      </div>
      <ServicesShowcase services={services} />
    </section>
  )
}
