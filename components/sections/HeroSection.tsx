import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { noOrphan } from '@/lib/typography'
import FoldText from '@/components/ui/FoldText/FoldText'

/** Cấu hình FoldText theo yêu cầu (riêng fontSize/fontWeight theo H1 của hero) */
const foldConfig = {
  foldStyle: 'paper',
  splitBy: 'char',
  hinge: 'top',
  trigger: 'scroll',
  foldAngle: 92,
  duration: 0.65,
  stagger: 0.045,
  staggerFrom: 'start',
  ease: 'power3.out',
  loopDelay: 1.4,
  hoverRefold: true,
  refoldRadius: 140,
  refoldAngle: 45,
  perspective: 700,
  creaseShading: 0.55,
  fontSize: 'inherit',
  fontWeight: 800,
  // Dấu tiếng Việt cần khoảng dòng rộng hơn mặc định 0.95 của component
  style: { lineHeight: 1.12, letterSpacing: '-0.02em' },
} as const
import { CalendarIcon, PhoneIcon } from '@/components/ui/Icons'

/**
 * Section 1 – Hero theo ảnh mẫu khách gửi (REQUIREMENTS 6.2 – ngoại lệ Hero).
 * Desktop: cao bằng màn hình nhưng tối đa 820px (--hero-h) để màn hình lớn không bị kéo dài.
 * trái = nhãn + tiêu đề 2 dòng + mô tả + cụm nút/chip viên thuốc + thông tin chân;
 * phải = bé Bull Pháp tách nền nằm trên gối xanh, phía sau là trái tim (từ logo).
 */
export function HeroSection() {
  return (
    <section
      id="trang-chu"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-white lg:min-h-[var(--hero-h)]"
      style={{ '--hero-h': 'min(calc(100svh - var(--qc-header-h)), 820px)' } as React.CSSProperties}
    >
      <div className="mx-auto grid w-full max-w-7xl px-4 sm:px-6 lg:min-h-[var(--hero-h)] lg:grid-cols-12 lg:px-8">
        {/* Cột trái — nội dung */}
        <div className="relative z-10 flex flex-col pt-12 pb-10 lg:col-span-7 lg:py-14 lg:pr-8">
          <div className="flex flex-1 flex-col justify-center">
            {/* Tiêu đề gấp giấy (FoldText – React Bits). Cỡ chữ giữ theo H1 thay cho clamp(3rem,10vw,7rem) của cấu hình mẫu */}
            <h1
              id="hero-title"
              className="mt-5 text-[38px] leading-[1.05] font-black tracking-[-0.02em] sm:text-[52px] lg:text-[44px] xl:text-[54px]"
            >
              <span className="sr-only">QC VET – </span>
              <span className="block text-primary lg:whitespace-nowrap">
                <FoldText text={noOrphan('Dành Cả Trái Tim')} {...foldConfig} />
              </span>
              <span className="block text-accent lg:whitespace-nowrap">
                <FoldText text={noOrphan('Cho Tình Yêu Thú Cưng')} {...foldConfig} />
              </span>
            </h1>

            <p
              data-hero="up"
              style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
              className="mt-6 max-w-[34rem] text-lg leading-relaxed text-ink"
            >
              {noOrphan(
                'Địa chỉ tin cậy đồng hành cùng sức khỏe chó mèo với đầy đủ dịch vụ từ thăm khám, xét nghiệm, chẩn đoán hình ảnh đến phẫu thuật và spa.',
              )}
            </p>

            {/* Cụm viên thuốc: 2 hành động chính + 5 dịch vụ */}
            <div
              data-hero="up"
              style={{ '--reveal-delay': '180ms' } as React.CSSProperties}
              className="mt-8 max-w-[36rem]"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/#${siteConfig.bookingAnchor}`}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent px-7 text-[17px] font-extrabold text-white transition-[background-color,transform] duration-200 hover:bg-accent-dark active:scale-[0.98]"
                >
                  <CalendarIcon className="size-5" />
                  Đặt lịch khám
                </Link>
                <a
                  href={siteConfig.telHref}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 text-[17px] font-extrabold whitespace-nowrap text-white transition-[background-color,transform] duration-200 hover:bg-primary-dark active:scale-[0.98]"
                >
                  <PhoneIcon className="size-[18px]" />
                  Gọi {siteConfig.hotline.display}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cột phải — khung minh hoạ (mobile: khối riêng; desktop: nửa phải, rộng tối đa 760px, neo theo mép khung nội dung) */}
        <div
          data-hero="zoom"
          className="relative -mx-4 aspect-[5/4] sm:-mx-6 lg:absolute lg:inset-y-0 lg:right-[max(0px,calc((100vw-80rem)/2-4rem))] lg:mx-0 lg:aspect-auto lg:w-[46%] lg:max-w-[760px]"
        >
          <HeroArt />
        </div>
      </div>
    </section>
  )
}

/** Trái tim (từ logo) + gối xanh + bé Bull Pháp tách nền + tia nhấn. Toàn bộ là trang trí trừ ảnh. */
function HeroArt() {
  return (
    <div className="absolute inset-0">
      {/* Trái tim nền */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 182"
        className="absolute top-[4%] left-[10%] w-[86%] text-primary-light lg:top-[8%] lg:left-[8%] lg:w-[84%]"
      >
        <path
          fill="currentColor"
          d="M100 178C58 146 6 112 6 60 6 28 30 4 60 4c18 0 31 9 40 23C109 13 122 4 140 4c30 0 54 24 54 56 0 52-52 86-94 118z"
        />
      </svg>

      {/* Tia nhấn đỏ phía trên đầu bé */}
      <svg
        aria-hidden="true"
        viewBox="0 0 60 60"
        className="absolute top-[36%] right-[5%] w-[10%] text-accent lg:top-[40%] lg:right-[4%]"
      >
        <g stroke="currentColor" strokeWidth="7" strokeLinecap="round">
          <path d="M8 40 L22 30" />
          <path d="M22 12 L30 26" />
          <path d="M46 6 L42 22" />
        </g>
      </svg>

      {/* Gối xanh — mái vòm rộng, đỉnh phẳng cao ngang giữa lưng bé (~42% chiều cao khung tính từ đáy); tràn trái, section cắt phần thừa */}
      <div
        aria-hidden="true"
        className="absolute -bottom-[42%] -left-[35%] h-[84%] w-[180%] rounded-[50%] bg-primary"
      />
      {/* Nối phẳng từ đỉnh vòm ra tới mép phải màn hình (màn rộng: khung minh hoạ không còn chạm mép) */}
      <div aria-hidden="true" className="absolute bottom-0 left-[55%] h-[42%] w-[200vw] bg-primary" />

      {/* Bé Bull Pháp tách nền */}
      <Image
        src="/images/hero/bull-phap-tach-nen.webp"
        alt="Bé Bull Pháp nằm thư giãn, mắt nhìn hiền lành"
        width={1199}
        height={539}
        sizes="(min-width: 1024px) 50vw, 100vw"
        loading="eager"
        fetchPriority="high"
        className="absolute bottom-[17%] left-[2%] w-[94%] max-w-none lg:bottom-[19%]"
      />
    </div>
  )
}
