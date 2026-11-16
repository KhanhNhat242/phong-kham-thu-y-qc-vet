/**
 * 5 dịch vụ chính — đúng tên & thứ tự theo REQUIREMENTS mục 3. Không tự thêm dịch vụ.
 * Giá luôn "Liên hệ" (REQUIREMENTS mục 8.1).
 */

export type ServiceIcon = 'stethoscope' | 'blood' | 'ultrasound' | 'surgery' | 'spa'

export type Service = {
  slug: string
  name: string
  /** Tên ngắn cho chuỗi quy trình / chip */
  shortName: string
  /** 15–22 từ, hiển thị trên thẻ */
  shortDescription: string
  /** ~12 từ, mô tả bước trong quy trình ở section Giới thiệu */
  step: string
  icon: ServiceIcon
  image: { src: string; alt: string }
  price: string
}

export const services: Service[] = [
  {
    slug: 'kham-tu-van-suc-khoe',
    name: 'Khám và tư vấn sức khỏe thú cưng',
    shortName: 'Khám lâm sàng',
    shortDescription:
      'Thăm khám lâm sàng tỉ mỉ từ mắt, tai đến tim phổi, tư vấn phác đồ chăm sóc định kỳ phù hợp với từng bé.',
    step: 'Bác sĩ hỏi bệnh sử, khám tổng quát và tư vấn hướng xử lý phù hợp.',
    icon: 'stethoscope',
    image: {
      src: '/images/services/kham-tu-van-suc-khoe.webp',
      alt: 'Bác sĩ kiểm tra mắt cận cảnh cho bé Poodle nâu',
    },
    price: 'Liên hệ',
  },
  {
    slug: 'xet-nghiem-mau',
    name: 'Xét nghiệm máu',
    shortName: 'Xét nghiệm máu',
    shortDescription:
      'Xét nghiệm máu giúp đánh giá chức năng gan, thận và tầm soát sớm bệnh lý về máu trước khi điều trị.',
    step: 'Lấy mẫu kiểm tra khi cần đánh giá chức năng gan, thận của bé.',
    icon: 'blood',
    image: {
      src: '/images/services/xet-nghiem-mau.webp',
      alt: 'Ống mẫu máu được kiểm tra trong phòng xét nghiệm',
    },
    price: 'Liên hệ',
  },
  {
    slug: 'sieu-am-x-quang',
    name: 'Siêu âm – X-quang',
    shortName: 'Siêu âm & X-quang',
    shortDescription:
      'Chẩn đoán hình ảnh không xâm lấn, hỗ trợ kiểm tra thai kỳ, ổ bụng và hệ xương khớp của thú cưng.',
    step: 'Chẩn đoán hình ảnh không xâm lấn để thấy rõ vấn đề bên trong.',
    icon: 'ultrasound',
    image: {
      src: '/images/services/sieu-am-x-quang.webp',
      alt: 'Hình ảnh siêu âm ổ bụng thú cưng tại phòng khám',
    },
    price: 'Liên hệ',
  },
  {
    slug: 'phau-thuat-thu-y',
    name: 'Phẫu thuật thú y',
    shortName: 'Phẫu thuật',
    shortDescription:
      'Phòng mổ vô trùng, quy trình gây mê an toàn và theo dõi hậu phẫu chu đáo để bé hồi phục nhẹ nhàng.',
    step: 'Thực hiện khi có chỉ định, gây mê an toàn và theo dõi hậu phẫu.',
    icon: 'surgery',
    image: {
      src: '/images/services/phau-thuat-thu-y.webp',
      alt: 'Hai bé mèo nằm nghỉ ngơi bên nhau trên bàn inox sạch sẽ',
    },
    price: 'Liên hệ',
  },
  {
    slug: 'spa-cham-soc-ve-sinh',
    name: 'Spa – chăm sóc, vệ sinh thú cưng',
    shortName: 'Spa chăm sóc',
    shortDescription:
      'Tắm gội khử mùi, vệ sinh tai và cắt móng, cắt tỉa tạo kiểu gọn gàng giúp bé luôn sạch thơm.',
    step: 'Tắm gội, vệ sinh và cắt tỉa để bé sạch thơm khi về nhà.',
    icon: 'spa',
    image: {
      src: '/images/services/spa-cham-soc-ve-sinh.webp',
      alt: 'Bé Poodle trắng bông xù vừa được cắt tỉa tròn trịa',
    },
    price: 'Liên hệ',
  },
]
