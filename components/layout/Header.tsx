import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { ButtonLink } from '@/components/ui/Button'
import { CalendarIcon, PhoneIcon } from '@/components/ui/Icons'
import { MobileMenu } from './MobileMenu'

/** Header cố định 80px, nền trắng (Section "Header" trong mô tả thiết kế). */
export function Header() {
  const bookingHref = `/#${siteConfig.bookingAnchor}`

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-line bg-white">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${siteConfig.name} – Trang chủ`}>
          <Image
            src={siteConfig.logo}
            alt={`Logo ${siteConfig.name}`}
            width={56}
            height={56}
            className="size-12 rounded-xl sm:size-14"
          />
          <span className="flex flex-col leading-none">
            <span className="text-xs font-bold tracking-[0.14em] text-accent uppercase">
              Phòng Khám Thú Y
            </span>
            <span className="mt-1 text-[22px] font-extrabold tracking-tight text-primary sm:text-2xl">
              {siteConfig.shortName}
            </span>
          </span>
        </Link>

        <nav aria-label="Menu chính" className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-7">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative inline-flex min-h-11 items-center text-[15px] font-semibold whitespace-nowrap text-ink transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-200 hover:text-primary hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={siteConfig.telHref}
            aria-label={`Gọi ${siteConfig.hotline.display}`}
            className="grid size-11 place-items-center rounded-xl bg-primary-light text-primary transition-colors duration-200 active:scale-95 sm:hidden"
          >
            <PhoneIcon className="size-5" />
          </a>
          <span className="hidden sm:block">
            <ButtonLink href={bookingHref} variant="accent">
              <CalendarIcon className="size-[18px]" />
              Đặt lịch khám
            </ButtonLink>
          </span>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
