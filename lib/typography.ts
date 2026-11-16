/**
 * Chống "rớt 1 chữ" xuống dòng cuối: nối 2 từ cuối bằng khoảng trắng không ngắt (U+00A0)
 * để từ cuối luôn đi cùng ít nhất một từ khác. Dùng kèm CSS `text-wrap: pretty/balance`
 * trong globals.css (lớp bảo vệ thứ hai cho trình duyệt hỗ trợ).
 */
const NBSP = ' '
/** Gạch nối không ngắt dòng (U+2011) — tránh ngắt "X-quang" thành "X-" / "quang" */
const NB_HYPHEN = '‑'

export function noOrphan(text: string): string {
  const trimmed = text.trim().replace(/(\p{L})-(\p{L})/gu, `$1${NB_HYPHEN}$2`)
  const lastSpace = trimmed.lastIndexOf(' ')
  if (lastSpace <= 0) return trimmed
  return `${trimmed.slice(0, lastSpace)}${NBSP}${trimmed.slice(lastSpace + 1)}`
}
