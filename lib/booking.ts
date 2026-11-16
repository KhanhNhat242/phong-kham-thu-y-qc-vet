/**
 * Định nghĩa & validate form đặt lịch (REQUIREMENTS mục 7.3).
 * Dùng chung cho client (antd Form) và server (Server Action).
 */
import { services } from '@/data/services'

export const PET_TYPES = [
  { value: 'cho', label: 'Chó' },
  { value: 'meo', label: 'Mèo' },
  { value: 'khac', label: 'Khác' },
] as const

export const TIME_SLOTS = [
  { value: 'sang', label: 'Sáng' },
  { value: 'chieu', label: 'Chiều' },
  { value: 'toi', label: 'Tối' },
] as const

export const OTHER_SERVICE = { value: 'khac', label: 'Khác / Cần tư vấn' } as const

export const SERVICE_OPTIONS = [
  ...services.map((s) => ({ value: s.slug, label: s.name })),
  OTHER_SERVICE,
]

export type BookingInput = {
  ownerName: string
  phone: string
  petType: string
  petName?: string
  service: string
  /** YYYY-MM-DD */
  date?: string
  timeSlot?: string
  note?: string
}

export type BookingField = keyof BookingInput

export type BookingResult =
  | { ok: true; message: string }
  | { ok: false; message: string; errors: Partial<Record<BookingField, string>> }

/** SĐT Việt Nam: 10 số, bắt đầu bằng 0 */
export const PHONE_PATTERN = /^0\d{9}$/

export function normalizePhone(value: string): string {
  return value.replace(/[\s.\-]/g, '')
}

const MAX = { name: 80, petName: 50, note: 1000 }

export function validateBooking(
  input: BookingInput,
  today: string,
): Partial<Record<BookingField, string>> {
  const errors: Partial<Record<BookingField, string>> = {}
  const name = input.ownerName?.trim() ?? ''
  if (!name) errors.ownerName = 'Vui lòng nhập họ tên'
  else if (name.length > MAX.name) errors.ownerName = 'Họ tên quá dài'

  if (!PHONE_PATTERN.test(normalizePhone(input.phone ?? '')))
    errors.phone = 'Số điện thoại gồm 10 số, bắt đầu bằng 0'

  if (!PET_TYPES.some((p) => p.value === input.petType))
    errors.petType = 'Vui lòng chọn loại thú cưng'

  if ((input.petName?.length ?? 0) > MAX.petName) errors.petName = 'Tên thú cưng quá dài'

  if (!SERVICE_OPTIONS.some((s) => s.value === input.service))
    errors.service = 'Vui lòng chọn dịch vụ'

  if (input.date) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(input.date)) errors.date = 'Ngày không hợp lệ'
    else if (input.date < today) errors.date = 'Không chọn ngày trong quá khứ'
  }

  if (input.timeSlot && !TIME_SLOTS.some((t) => t.value === input.timeSlot))
    errors.timeSlot = 'Khung giờ không hợp lệ'

  if ((input.note?.length ?? 0) > MAX.note) errors.note = 'Ghi chú tối đa 1000 ký tự'

  return errors
}
