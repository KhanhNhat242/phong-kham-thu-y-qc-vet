'use client'

import { Drawer } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '@/lib/site-config'
import { CalendarIcon, CloseIcon, MenuIcon, PhoneIcon, ZaloIcon } from '@/components/ui/Icons'

/** Menu dạng drawer cho mobile / tablet (< lg). */
export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Mở menu"
        aria-expanded={open}
        className="grid size-11 place-items-center rounded-xl border border-line text-primary transition-colors duration-200 hover:bg-primary-light active:scale-95 lg:hidden"
      >
        <MenuIcon className="size-6" />
      </button>

      <Drawer
        open={open}
        onClose={close}
        placement="right"
        size={320}
        closable={false}
        styles={{ body: { padding: 0 } }}
        rootClassName="lg:hidden"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center justify-between border-b border-line px-5">
            <span className="flex items-center gap-2.5">
              <Image src={siteConfig.logo} alt="" width={44} height={44} className="size-11 rounded-lg" />
              <span className="text-lg font-extrabold text-primary">{siteConfig.shortName}</span>
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Đóng menu"
              className="grid size-11 place-items-center rounded-xl text-ink hover:bg-surface"
            >
              <CloseIcon className="size-6" />
            </button>
          </div>

          <nav aria-label="Menu di động" className="flex-1 overflow-y-auto px-3 py-4">
            <ul className="flex flex-col">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="flex min-h-12 items-center rounded-xl px-4 text-base font-semibold text-ink transition-colors duration-200 hover:bg-primary-light hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3 border-t border-line p-5">
            <Link
              href={`/#${siteConfig.bookingAnchor}`}
              onClick={close}
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-accent font-bold text-white transition-colors duration-200 hover:bg-accent-dark active:scale-[0.98]"
            >
              <CalendarIcon className="size-5" />
              Đặt lịch khám
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={siteConfig.telHref}
                className="flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-primary text-[15px] font-bold text-primary active:scale-[0.98]"
              >
                <PhoneIcon className="size-4" />
                Gọi ngay
              </a>
              <a
                href={siteConfig.zaloHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary-light text-[15px] font-bold text-primary active:scale-[0.98]"
              >
                <ZaloIcon className="size-6 text-primary [&_text]:fill-white" />
                Chat Zalo
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}
