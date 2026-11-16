import type { ReactNode } from 'react'
import { noOrphan } from '@/lib/typography'

type Props = {
  /** Nhãn phụ ngắn (2–4 từ), chỉ là chữ — không viên thuốc, không icon (REQUIREMENTS 6.2) */
  label: string
  title: string
  description?: string
  align?: 'center' | 'left'
  /** Nội dung phụ bên phải (vd. nút xem tất cả) khi align="left" */
  aside?: ReactNode
  className?: string
  /** id cho thẻ h2 (dùng với aria-labelledby của section) */
  titleId?: string
}

/** Cụm tiêu đề section: nhãn phụ + H2 (viết hoa đầu câu) + mô tả tối đa 2 dòng. */
export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  aside,
  className = 'mb-12',
  titleId,
}: Props) {
  const center = align === 'center'

  return (
    <div
      className={`${className} flex flex-col gap-6 ${
        center ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'
      }`}
    >
      <div className={center ? 'max-w-2xl' : 'max-w-2xl md:flex-1'}>
        <p className="text-sm font-bold tracking-[0.08em] text-accent-dark uppercase">{label}</p>
        <h2
          id={titleId}
          className="mt-3 text-[28px] leading-tight font-extrabold tracking-tight text-primary sm:text-4xl lg:text-[40px]"
        >
          {noOrphan(title)}
        </h2>
        {description && (
          <p className={`mt-4 text-base leading-relaxed text-muted sm:text-lg ${center ? 'mx-auto max-w-xl' : 'max-w-xl'}`}>
            {noOrphan(description)}
          </p>
        )}
      </div>
      {aside}
    </div>
  )
}
