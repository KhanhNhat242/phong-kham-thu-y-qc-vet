import { siteConfig } from '@/lib/site-config'
import { noOrphan } from '@/lib/typography'
import { ClockIcon, MapPinIcon, PhoneIcon, ZaloIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { BookingForm } from './BookingForm'

/** Section 7 – Đặt lịch khám & bản đồ. Nền xanh đậm, form nền trắng. */
export function BookingSection() {
  return (
    <section
      id="lien-he"
      aria-labelledby="booking-title"
      className="bg-primary py-14 lg:py-24"
    >

      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Form */}
        <div
          id={siteConfig.bookingAnchor}
          className="scroll-mt-28 rounded-2xl bg-white p-6 shadow-soft-lg sm:p-8 lg:col-span-7"
        >
          <p className="text-sm font-bold tracking-[0.08em] text-accent-dark uppercase">Đặt lịch khám</p>
          <h2
            id="booking-title"
            className="mt-3 text-[28px] leading-tight font-extrabold tracking-tight text-primary sm:text-[34px]"
          >
            {noOrphan('Đặt lịch khám cho bé')}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            {noOrphan('Đặt lịch trước để bé không phải chờ đợi lâu. Phòng khám sẽ gọi lại xác nhận ngay!')}
          </p>

          <div className="mt-7">
            <BookingForm />
          </div>
        </div>

        {/* Thông tin liên hệ + bản đồ */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div data-surface="dark" className="rounded-2xl bg-primary-dark p-6 text-white ring-1 ring-white/15 sm:p-8">
            <h3 className="text-xl font-bold">Thông tin liên hệ</h3>
            <ul className="mt-6 space-y-5">
              <InfoRow icon={<MapPinIcon className="size-5" />} label="Địa chỉ">
                {noOrphan(siteConfig.address.full)}
              </InfoRow>
              <InfoRow icon={<PhoneIcon className="size-5" />} label="Hotline / Zalo">
                <a href={siteConfig.telHref} className="text-lg font-extrabold tracking-wide whitespace-nowrap hover:underline">
                  {siteConfig.hotline.display}
                </a>
                <span className="text-white/70"> · </span>
                <a href={`tel:${siteConfig.secondaryPhone.raw}`} className="font-semibold whitespace-nowrap hover:underline">
                  {siteConfig.secondaryPhone.display}
                </a>
              </InfoRow>
              <InfoRow icon={<ClockIcon className="size-5" />} label="Giờ mở cửa">
                {siteConfig.openingHours.label}
              </InfoRow>
            </ul>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <a
                href={siteConfig.telHref}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-accent text-[15px] font-bold text-white ring-2 ring-white transition-[background-color,transform] duration-200 hover:bg-accent-dark active:scale-[0.98]"
              >
                <PhoneIcon className="size-4" />
                Gọi ngay
              </a>
              <a
                href={siteConfig.zaloHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white text-[15px] font-bold text-primary transition-[background-color,transform] duration-200 hover:bg-primary-light active:scale-[0.98]"
              >
                <ZaloIcon className="size-6 [&_text]:fill-white" />
                Chat Zalo
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-soft-lg">
            <iframe
              src={siteConfig.mapsEmbedSrc}
              title={`Bản đồ đường đến ${siteConfig.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full rounded-xl border-0 sm:h-72"
            />
            <a
              href={siteConfig.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 flex h-12 items-center justify-center gap-2 rounded-xl bg-primary-light text-[15px] font-bold text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
            >
              <MapPinIcon className="size-4" />
              Mở Google Maps chỉ đường
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-white">{icon}</span>
      <span className="text-base leading-relaxed text-white/90">
        <span className="block text-xs font-semibold tracking-wider text-white/75 uppercase">{label}</span>
        {children}
      </span>
    </li>
  )
}
