import Link from 'next/link'
import { services } from '@/data/services'
import { siteConfig } from '@/lib/site-config'
import { noOrphan } from '@/lib/typography'
import { CalendarIcon } from '@/components/ui/Icons'
import { ProcessSteps } from './ProcessSteps'

/**
 * Section Quy trình 5 bước. Nền trắng, nối tiếp ngay sau section Giới thiệu.
 * Theo ảnh mẫu: khối tiêu đề góc trên trái + đường cong đi lên nối 5 bước (ProcessSteps).
 * Padding trên nhỏ (pt-6 / lg:pt-4) để khoảng cách với Giới thiệu giữ như khi còn chung một section.
 */
export function Process() {
  const steps = services.map(({ slug, shortName, step, icon }) => ({ slug, shortName, step, icon }))

  return (
    <section id="quy-trinh" aria-labelledby="process-title" className="overflow-hidden bg-white pt-6 pb-14 lg:pt-4 lg:pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProcessSteps
          steps={steps}
          header={
            <div>
              <h2
                id="process-title"
                className="mt-3 text-[28px] leading-tight font-extrabold tracking-tight text-primary sm:text-4xl lg:text-[38px]"
              >
                {noOrphan('Chăm sóc khép kín qua 5 bước')}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                {noOrphan('Tùy tình trạng của bé, bác sĩ chỉ định các bước cần thiết. Rê chuột vào từng bước để xem chi tiết.')}
              </p>
              <Link
                href={`/#${siteConfig.bookingAnchor}`}
                className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-bold text-white transition-[background-color,transform] duration-200 hover:bg-accent-dark active:scale-[0.98]"
              >
                <CalendarIcon className="size-5" />
                Đặt lịch khám
              </Link>
            </div>
          }
        />
      </div>
    </section>
  )
}
