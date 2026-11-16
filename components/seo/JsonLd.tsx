import { siteConfig } from '@/lib/site-config'
import { services } from '@/data/services'

/** JSON-LD VeterinaryCare — dữ liệu lấy từ lib/site-config.ts (CLAUDE.md mục 7). */
export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: siteConfig.name,
    slogan: siteConfig.slogan,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}/images/hero/bull-phap-sanh-le-tan.webp`,
    telephone: `+84${siteConfig.hotline.raw.slice(1)}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.ward,
      addressRegion: siteConfig.address.city,
      addressCountry: 'VN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: siteConfig.geo.lat, longitude: siteConfig.geo.lng },
    hasMap: siteConfig.mapsHref,
    openingHours: siteConfig.openingHours.schema,
    sameAs: [siteConfig.facebookHref],
    availableService: services.map((s) => ({ '@type': 'Service', name: s.name })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
