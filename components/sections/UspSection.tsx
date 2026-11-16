import Link from 'next/link'
import { services } from '@/data/services'
import { siteConfig } from '@/lib/site-config'
import { noOrphan } from '@/lib/typography'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowRightIcon, CalendarIcon, CheckIcon } from '@/components/ui/Icons'
import TiltedCard, { TiltedCardLayer } from '@/components/ui/TiltedCard/TiltedCard'
import { ProcessSteps } from './ProcessSteps'

/** Các ý chính — chỉ nêu điều có thật / quy tắc của dự án, không số liệu, không cam kết kết quả. */
const highlights = [
  'Trọn gói 5 dịch vụ trong cùng một tòa nhà 4 tầng, bé không phải di chuyển nhiều nơi.',
  'Mỗi tầng một khu riêng: khám, chẩn đoán hình ảnh, xét nghiệm – phẫu thuật và spa.',
  'Chi phí được báo rõ sau khi bác sĩ thăm khám, trước khi thực hiện dịch vụ.',
]

/** Cấu hình chung của TiltedCard (React Bits) theo yêu cầu */
const tilt = {
  containerWidth: '100%',
  containerHeight: '100%',
  imageWidth: '100%',
  imageHeight: '100%',
  rotateAmplitude: 12,
  scaleOnHover: 1.05,
  glare: 0.5,
  shadow: 0.5,
  radius: 24,
} as const

/**
 * Section 2 – USP "Trọn gói tại 1 cơ sở". Nền trắng.
 * Tầng 1 (theo ảnh mẫu khách gửi): trái = 2 ảnh chồng lệch dùng TiltedCard (nghiêng theo chuột,
 * bấm để lật xem thông tin); phải = nhãn + tiêu đề + mô tả + 3 ý + số điện thoại + 2 nút.
 * Tầng 2: quy trình 5 bước dạng đường cong (ProcessSteps).
 */
export function UspSection() {
  const steps = services.map(({ slug, shortName, step, icon }) => ({ slug, shortName, step, icon }))

  return (
    <section id="gioi-thieu" aria-labelledby="usp-title" className="overflow-hidden bg-white py-14 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Trái: 2 ảnh chồng lệch */}
          <div className="lg:col-span-6">
            {/* Bố cục theo ảnh mẫu: 2 thẻ gần vuông chồng chéo theo đường chéo + mảng màu nhạt ló ra ở khe giữa */}
            <div className="relative mx-auto aspect-square w-full max-w-[560px]">
              <div aria-hidden="true" className="absolute top-[18%] left-[48%] h-[30%] w-[30%] rounded-3xl bg-primary-light" />

              <div className="absolute top-[3%] left-[3%] aspect-[1/0.95] w-[57%]">
                <TiltedCard
                  {...tilt}
                  imageSrc="/images/gallery/poodle-kem-sau-spa.webp"
                  altText="Bé Poodle kem được vuốt ve sau buổi spa tại QC VET"
                  captionText="Spa & chăm sóc · bấm để xem thêm"
                  backContent={
                    <CardBack
                      title="Spa & chăm sóc"
                      text="Tắm gội, vệ sinh tai móng và cắt tỉa nhẹ nhàng để bé sạch thơm."
                      footnote="Khu Spa – Pet shop trong cùng tòa nhà"
                    />
                  }
                >
                  <TiltedCardLayer depth={30}>
                    <CardLabel position="top">Spa & chăm sóc</CardLabel>
                  </TiltedCardLayer>
                </TiltedCard>
              </div>

              <div className="absolute top-[41%] right-[2%] z-10 aspect-[1/0.93] w-[60%]">
                <TiltedCard
                  {...tilt}
                  imageSrc="/images/about/mat-tien-phong-kham.webp"
                  altText="Mặt tiền tòa nhà 4 tầng của Phòng Khám Thú Y QC VET với các biển hiệu phân khu"
                  captionText="Tòa nhà 4 tầng · bấm để xem thêm"
                  backContent={
                    <CardBack
                      title="Tòa nhà 4 tầng"
                      text="Mỗi tầng một khu riêng: khám, chẩn đoán hình ảnh, xét nghiệm – phẫu thuật, spa."
                      footnote={siteConfig.address.full}
                    />
                  }
                >
                  <TiltedCardLayer depth={30}>
                    <CardLabel>Tòa nhà 4 tầng</CardLabel>
                  </TiltedCardLayer>
                </TiltedCard>
              </div>
            </div>
          </div>

          {/* Phải: nội dung */}
          <div className="lg:col-span-6">
            <SectionHeading
              titleId="usp-title"
              label="Về phòng khám"
              title="Chăm sóc toàn diện tại một điểm đến duy nhất"
              description="Từ thăm khám, xét nghiệm, chẩn đoán hình ảnh đến phẫu thuật và spa đều diễn ra trong cùng một tòa nhà, giúp bé được theo dõi liền mạch."
              className="mb-6"
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/#${siteConfig.bookingAnchor}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-6 text-base font-bold text-white transition-[background-color,transform] duration-200 hover:bg-accent-dark active:scale-[0.98]"
              >
                <CalendarIcon className="size-5" />
                Đặt lịch khám
              </Link>
            </div>
          </div>
        </div>

        {/* Quy trình 5 bước — khối tiêu đề góc trên trái + đường cong đi lên (theo ảnh mẫu) */}
        <div className="mt-20 lg:mt-28">
          <ProcessSteps
            steps={steps}
            header={
              <div>
                <h3 className="mt-3 text-[28px] leading-tight font-extrabold tracking-tight text-primary sm:text-4xl lg:text-[38px]">
                  {noOrphan('Chăm sóc khép kín qua 5 bước')}
                </h3>
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
      </div>
    </section>
  )
}

/** Nhãn đè lên ảnh (lớp nổi của TiltedCard) — có nền tối phía dưới để chữ trắng đủ tương phản */
function CardLabel({ children, position = 'bottom' }: { children: React.ReactNode; position?: 'top' | 'bottom' }) {
  const top = position === 'top'
  return (
    <div
      className={`absolute inset-x-0 to-transparent px-4 sm:px-5 ${top ? 'top-0 bg-linear-to-b from-black/60 pt-3 pb-10 sm:pt-4' : 'bottom-0 bg-linear-to-t from-black/70 pt-10 pb-3 sm:pb-4'
        }`}
    >
      <p className="text-base font-bold whitespace-nowrap text-white sm:text-lg">{children}</p>
    </div>
  )
}

/** Mặt sau của thẻ (bấm để lật) */
function CardBack({ title, text, footnote }: { title: string; text: string; footnote: string }) {
  return (
    <div className="flex size-full flex-col justify-center gap-2 bg-primary p-4 text-white sm:gap-3 sm:p-8">
      <p className="text-base leading-snug font-extrabold sm:text-xl">{noOrphan(title)}</p>
      <p className="text-sm leading-relaxed text-white/90 sm:text-base">{noOrphan(text)}</p>
      <p className="text-xs text-white/80 max-sm:hidden sm:text-sm">{noOrphan(footnote)}</p>
    </div>
  )
}
