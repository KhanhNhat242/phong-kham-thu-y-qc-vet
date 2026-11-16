import type { ReactNode } from 'react'

/** Khung chứa chuẩn: max-w-7xl + lề px-4 sm:px-6 lg:px-8 */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}
