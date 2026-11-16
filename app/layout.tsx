import type { Metadata, Viewport } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { Suspense } from 'react'
import './globals.css'
import { siteConfig } from '@/lib/site-config'
import { AntdProvider } from '@/components/providers/AntdProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingContact } from '@/components/layout/FloatingContact'

const beVietnam = Be_Vietnam_Pro({
  variable: '--font-be-vietnam',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – ${siteConfig.slogan}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: siteConfig.name,
    title: `${siteConfig.name} – ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: [{ url: '/images/hero/bull-phap-sanh-le-tan.webp', width: 1400, height: 1304, alt: siteConfig.name }],
  },
}

export const viewport: Viewport = {
  themeColor: '#0B3D91',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Suspense fallback={null}>
          {/* layer: đưa CSS của antd vào @layer antd để Tailwind utilities luôn thắng (xem globals.css) */}
          <AntdRegistry layer>
            <AntdProvider>
              <a href="#noi-dung" className="skip-link">
                Bỏ qua đến nội dung chính
              </a>
              <Header />
              <main id="noi-dung" tabIndex={-1} className="flex-1 outline-none">
                {children}
              </main>
              <Footer />
              <FloatingContact />
            </AntdProvider>
          </AntdRegistry>
        </Suspense>
      </body>
    </html>
  )
}
