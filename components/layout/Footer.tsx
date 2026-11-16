import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { services } from '@/data/services'
import { noOrphan } from '@/lib/typography'
import { ClockIcon, FacebookIcon, MapPinIcon, PhoneIcon, ZaloIcon } from '@/components/ui/Icons'

export function Footer() {
  return (
    <footer data-surface="dark" className="bg-primary-dark text-white/80">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pt-16 pb-10 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-3">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="rounded-2xl bg-white p-1.5">
              <Image src={siteConfig.logo} alt={`Logo ${siteConfig.name}`} width={56} height={56} className="size-14" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-xs font-bold tracking-[0.14em] text-white/75 uppercase">Phòng Khám Thú Y</span>
              <span className="mt-1 text-2xl font-extrabold text-white">{siteConfig.shortName}</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-base leading-relaxed">
            {noOrphan(
              `“${siteConfig.slogan}” – đồng hành cùng sức khỏe chó mèo tại Định Công, Hà Nội với dịch vụ trọn gói tại một cơ sở.`,
            )}
          </p>
          <div className="mt-6 flex gap-3">
            <SocialLink href={siteConfig.facebookHref} label="Facebook QC VET">
              <FacebookIcon className="size-5" />
            </SocialLink>
            <SocialLink href={siteConfig.zaloHref} label="Zalo QC VET">
              <ZaloIcon className="size-7 [&_text]:fill-primary-dark" />
            </SocialLink>
          </div>
        </div>

        <div className="lg:col-span-3">
          <FooterTitle>Dịch vụ</FooterTitle>
          <ul className="space-y-1 text-base">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/dich-vu/${s.slug}`} className="inline-flex min-h-10 items-center transition-colors duration-200 hover:text-white hover:underline">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <FooterTitle>Khám phá</FooterTitle>
          {/* 2 cột, đọc từ trên xuống: 3 mục mỗi cột */}
          <ul className="grid grid-flow-col grid-rows-3 gap-x-8 gap-y-1 text-base">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center transition-colors duration-200 hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <FooterTitle>Liên hệ</FooterTitle>
          <ul className="space-y-4 text-base">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 size-5 shrink-0 text-white" />
              <a href={siteConfig.mapsHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {noOrphan(siteConfig.address.full)}
              </a>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 size-5 shrink-0 text-white" />
              <span>
                <a href={siteConfig.telHref} className="font-bold whitespace-nowrap text-white hover:underline">
                  {siteConfig.hotline.display}
                </a>
                <span className="text-white/70"> · </span>
                <a href={`tel:${siteConfig.secondaryPhone.raw}`} className="whitespace-nowrap hover:text-white">
                  {siteConfig.secondaryPhone.display}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <ClockIcon className="mt-0.5 size-5 shrink-0 text-white" />
              <span>{siteConfig.openingHours.label}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.name}. Bảo lưu mọi quyền.
          </p>
          <p>Một số ảnh minh hoạ: Wikimedia Commons (CC BY / CC BY-SA).</p>
        </div>
      </div>
    </footer>
  )
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 flex items-center gap-2 text-base font-bold text-white">
      <span className="h-4 w-1 rounded-full bg-accent" />
      {children}
    </h3>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-11 place-items-center rounded-xl bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 active:scale-95"
    >
      {children}
    </a>
  )
}
