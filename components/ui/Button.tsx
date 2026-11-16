import Link from 'next/link'
import type { ReactNode } from 'react'

type Variant = 'accent' | 'outline' | 'primary' | 'white' | 'ghost-light'
type Size = 'md' | 'lg'

/** Flat Design: nền màu đặc, không gradient/bóng màu; hover chỉ đổi màu. */
const variants: Record<Variant, string> = {
  accent: 'bg-accent text-white hover:bg-accent-dark',
  primary: 'bg-primary text-white hover:bg-primary-dark',
  outline: 'border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white',
  white: 'bg-white text-primary hover:bg-primary-light',
  'ghost-light': 'border-2 border-white/70 text-white hover:bg-white/10',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-13 px-6 text-base sm:px-7',
}

type Props = {
  href: string
  children: ReactNode
  variant?: Variant
  size?: Size
  external?: boolean
  className?: string
  ariaLabel?: string
}

/** Nút dạng link (CTA). Link ngoài tự thêm target/rel theo CLAUDE.md mục 4. */
export function ButtonLink({
  href,
  children,
  variant = 'accent',
  size = 'md',
  external,
  className = '',
  ariaLabel,
}: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-xl font-bold whitespace-nowrap transition-[background-color,color,border-color,transform] duration-200 ease-out active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`

  const isRaw = external || href.startsWith('tel:') || href.startsWith('mailto:')
  if (isRaw) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}
