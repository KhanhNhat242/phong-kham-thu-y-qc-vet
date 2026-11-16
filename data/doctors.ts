/**
 * Đội ngũ — PLACEHOLDER theo vai trò. Phiếu ghi "chưa xác minh kinh nghiệm và chứng chỉ đội ngũ bác sĩ"
 * → KHÔNG ghi bằng cấp, số năm kinh nghiệm, trường đào tạo, số ca (REQUIREMENTS mục 5, 8.2).
 * Ảnh là ảnh MINH HOẠ (không phải bác sĩ thật của phòng khám) → luôn hiện nhãn "Ảnh minh hoạ".
 * TODO(xác nhận): tên, ảnh thật của bác sĩ; nguồn/giấy phép ảnh minh hoạ (docs/IMAGE_CREDITS.md).
 */

export type Doctor = {
  slug: string
  role: string
  /** Phạm vi công việc, 2–3 mục */
  scope: string
  /** ~15 từ */
  description: string
  image: { src: string; alt: string; position: string }
}

export const doctors: Doctor[] = [
  {
    slug: 'kham-noi-khoa',
    role: 'Bác sĩ khám và nội khoa',
    scope: 'Khám lâm sàng · Tư vấn',
    description:
      'Lắng nghe kỹ từng triệu chứng, thăm khám nhẹ nhàng và giải thích rõ ràng để bạn yên tâm.',
    image: {
      src: '/images/doctors/bac-si-kham-noi-khoa.webp',
      alt: 'Ảnh minh hoạ: bác sĩ mặc áo blouse trắng, đeo ống nghe, khoanh tay mỉm cười',
      position: 'object-[50%_30%]',
    },
  },
  {
    slug: 'chan-doan',
    role: 'Bác sĩ chẩn đoán và xét nghiệm',
    scope: 'Xét nghiệm · Siêu âm – X-quang',
    description:
      'Đọc kết quả xét nghiệm và hình ảnh cẩn thận, trao đổi cụ thể với bạn trước khi điều trị.',
    image: {
      src: '/images/doctors/bac-si-chan-doan.webp',
      alt: 'Ảnh minh hoạ: bác sĩ ghi chép trên bìa hồ sơ trong buổi tư vấn',
      position: 'object-[50%_35%]',
    },
  },
  {
    slug: 'phau-thuat',
    role: 'Bác sĩ phẫu thuật',
    scope: 'Phẫu thuật · Theo dõi hậu phẫu',
    description:
      'Thực hiện phẫu thuật theo quy trình an toàn và theo dõi sát để bé hồi phục nhẹ nhàng.',
    image: {
      src: '/images/doctors/bac-si-phau-thuat.webp',
      alt: 'Ảnh minh hoạ: bác sĩ mặc áo blouse trắng cầm ống nghe sau lưng',
      position: 'object-[50%_40%]',
    },
  },
]
