import { siteConfig } from '@/lib/site-config'
import { PhoneIcon, ZaloIcon } from '@/components/ui/Icons'

/**
 * Cụm nút nổi góc phải dưới: Gọi khẩn cấp (đỏ, nhịp đập — tắt khi prefers-reduced-motion)
 * + Chat Zalo (xanh). Hiển thị trên mọi trang, mọi kích thước màn hình.
 */
export function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 pb-[env(safe-area-inset-bottom)] sm:right-6 sm:bottom-6">
      <a
        href={siteConfig.zaloHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo với phòng khám"
        className="group relative grid size-14 place-items-center rounded-full bg-primary text-white shadow-soft-lg ring-2 ring-white transition-[transform,background-color] duration-200 hover:bg-primary-dark active:scale-95"
      >
        <ZaloIcon className="size-9 [&_text]:fill-primary" />
        <Tooltip>Chat Zalo</Tooltip>
      </a>

      <a
        href={siteConfig.telHref}
        aria-label={`Gọi khẩn cấp ${siteConfig.hotline.display}`}
        className="group relative grid size-14 place-items-center rounded-full bg-accent text-white shadow-soft-lg ring-2 ring-white transition-[transform,background-color] duration-200 hover:bg-accent-dark active:scale-95"
      >
        <span aria-hidden="true" className="pulse-ring absolute inset-0 rounded-full bg-accent" />
        <PhoneIcon className="relative size-6" />
        <Tooltip>Gọi {siteConfig.hotline.display}</Tooltip>
      </a>
    </div>
  )
}

function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 rounded-lg bg-ink px-3 py-1.5 text-sm font-semibold whitespace-nowrap text-white opacity-0 transition-[opacity,transform] duration-150 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block">
      {children}
    </span>
  )
}
