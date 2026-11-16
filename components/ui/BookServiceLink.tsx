'use client'

import type { ReactNode } from 'react'
import { siteConfig } from '@/lib/site-config'

export const SELECT_SERVICE_EVENT = 'qcvet:select-service'

/**
 * Link "Đặt lịch" trên thẻ dịch vụ: cuộn tới form và chọn sẵn dịch vụ.
 * Không có JS vẫn hoạt động như anchor thường.
 */
export function BookServiceLink({
  serviceSlug,
  className,
  children,
}: {
  serviceSlug: string
  className?: string
  children: ReactNode
}) {
  return (
    <a
      href={`#${siteConfig.bookingAnchor}`}
      className={className}
      onClick={() => {
        window.dispatchEvent(new CustomEvent(SELECT_SERVICE_EVENT, { detail: serviceSlug }))
      }}
    >
      {children}
    </a>
  )
}
