import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

// Khi các trang con (REQUIREMENTS 7.1) hoàn thành thì bổ sung vào đây.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteConfig.url, changeFrequency: 'weekly', priority: 1 }]
}
