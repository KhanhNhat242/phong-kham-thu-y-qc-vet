'use server'

import { siteConfig } from '@/lib/site-config'
import {
  normalizePhone,
  validateBooking,
  type BookingInput,
  type BookingResult,
} from '@/lib/booking'

/** Ngày hiện tại theo giờ Việt Nam, dạng YYYY-MM-DD */
function todayInVietnam(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Ho_Chi_Minh' }).format(new Date())
}

export async function submitBooking(input: BookingInput): Promise<BookingResult> {
  const data: BookingInput = {
    ownerName: String(input?.ownerName ?? '').trim(),
    phone: normalizePhone(String(input?.phone ?? '')),
    petType: String(input?.petType ?? ''),
    petName: input?.petName ? String(input.petName).trim() : undefined,
    service: String(input?.service ?? ''),
    date: input?.date ? String(input.date) : undefined,
    timeSlot: input?.timeSlot ? String(input.timeSlot) : undefined,
    note: input?.note ? String(input.note).trim() : undefined,
  }

  const errors = validateBooking(data, todayInVietnam())
  if (Object.keys(errors).length > 0) {
    return { ok: false, message: 'Vui lòng kiểm tra lại thông tin.', errors }
  }

  // TODO(xác nhận): kênh nhận yêu cầu thật (email / Google Sheet / Zalo OA) — REQUIREMENTS 7.3.
  // Bản demo chỉ ghi log phía server.
  console.info('[QC VET] Yêu cầu đặt lịch mới:', data)

  return {
    ok: true,
    message: `Đã gửi yêu cầu! Phòng khám sẽ liên hệ lại sớm. Cần gấp, bạn gọi ngay ${siteConfig.hotline.display} nhé.`,
  }
}
