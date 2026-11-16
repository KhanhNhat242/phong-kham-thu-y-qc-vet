import { doctors } from '@/data/doctors'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { ArrowRightIcon } from '@/components/ui/Icons'
import { DoctorsDeck } from './DoctorsDeck'

/**
 * Section 4 – Đội ngũ (rút gọn). Nền trắng.
 * Tiêu đề + danh sách vai trò bên trái, chồng thẻ cuộn bên phải (REQUIREMENTS 6.2 – ngoại lệ Đội ngũ).
 * KHÔNG bằng cấp / năm kinh nghiệm / số ca (REQUIREMENTS 5, 8.2). Ảnh là ảnh minh hoạ.
 */
export function DoctorsSection() {
  return (
    <section id="doi-ngu-bac-si" aria-labelledby="doctors-title" className="bg-white py-14 lg:py-0">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <DoctorsDeck
          doctors={doctors}
          header={
            <SectionHeading
              titleId="doctors-title"
              label="Đội ngũ"
              title="Những người trực tiếp chăm sóc bé"
              description="Bác sĩ luôn nhẹ nhàng, kiên nhẫn với từng bé và giải thích rõ ràng để bạn hiểu và an tâm."
              className="mb-0"
            />
          }
        />
      </div>
    </section>
  )
}
