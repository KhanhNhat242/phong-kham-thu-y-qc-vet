/**
 * Bài viết kiến thức — nội dung MẪU, phổ thông, không cam kết kết quả điều trị (REQUIREMENTS mục 8.4).
 * Không ghi ngày đăng (chưa có ngày thật → không bịa). Bài đầu tiên là bài nổi bật.
 * Ảnh minh hoạ lấy từ Wikimedia Commons (docs/IMAGE_CREDITS.md).
 * TODO(xác nhận): bác sĩ của phòng khám duyệt lại nội dung chuyên môn trước khi đăng chính thức.
 */

export type PostBlock = {
  heading?: string
  paragraphs?: string[]
  /** Danh sách gạch đầu dòng */
  items?: string[]
}

export type Post = {
  slug: string
  category: string
  /** 8–10 từ */
  title: string
  /** ~18 từ */
  excerpt: string
  image: { src: string; alt: string }
  body: PostBlock[]
}

export const posts: Post[] = [
  {
    slug: 'dau-hieu-cho-meo-met-moi',
    category: 'Sức khỏe',
    title: '5 dấu hiệu cho thấy chó mèo đang mệt mỏi',
    excerpt:
      'Bé bỏ ăn, nằm lì một chỗ hay thở nhanh bất thường là lúc bạn nên đưa bé đi khám sớm.',
    image: {
      src: '/images/posts/dau-hieu-cho-meo-met-moi.webp',
      alt: 'Bác sĩ thú y dùng ống nghe khám cho chú chó trắng',
    },
    body: [
      {
        paragraphs: [
          'Chó mèo không thể nói ra cảm giác khó chịu, nên những thay đổi nhỏ trong sinh hoạt thường là tín hiệu sớm nhất. Quan sát bé mỗi ngày giúp bạn nhận ra vấn đề trước khi trở nên nghiêm trọng.',
        ],
      },
      {
        heading: 'Những dấu hiệu cần để ý',
        items: [
          'Bỏ ăn hoặc ăn ít hơn hẳn so với thường ngày, đặc biệt kéo dài quá một ngày.',
          'Nằm lì một chỗ, ít chơi, không còn hào hứng khi được gọi tên hay dắt đi dạo.',
          'Thở nhanh, thở gấp khi đang nghỉ ngơi, hoặc ho nhiều lần trong ngày.',
          'Nôn, tiêu chảy, đi tiểu khó hoặc thay đổi màu sắc phân, nước tiểu.',
          'Trốn vào góc tối, phản ứng đau khi được bế hoặc chạm vào một vùng cơ thể.',
        ],
      },
      {
        heading: 'Khi nào nên đưa bé đi khám',
        paragraphs: [
          'Nếu bé có từ hai dấu hiệu trở lên, hoặc một dấu hiệu kéo dài, bạn nên liên hệ phòng khám để được bác sĩ thăm khám. Với các biểu hiện như khó thở, co giật hay chảy máu, hãy gọi ngay để được hướng dẫn kịp thời.',
        ],
      },
    ],
  },
  {
    slug: 'cham-soc-long-mat-tai-nha',
    category: 'Chăm sóc',
    title: 'Cách chăm sóc lông và mắt cho bé tại nhà',
    excerpt:
      'Chải lông mỗi ngày, lau mắt bằng gạc sạch và tắm đúng tần suất giúp bé luôn khỏe đẹp.',
    image: {
      src: '/images/posts/cham-soc-long-mat-tai-nha.webp',
      alt: 'Chú chó lông trắng dài ngồi ngoan trên bàn khám',
    },
    body: [
      {
        heading: 'Chải lông đúng cách',
        paragraphs: [
          'Chải lông hằng ngày giúp gỡ rối, loại bỏ lông rụng và giúp bạn phát hiện sớm ve, bọ chét hay vùng da bất thường. Hãy chọn lược phù hợp với độ dài lông và chải nhẹ nhàng theo chiều lông.',
        ],
      },
      {
        heading: 'Vệ sinh mắt',
        paragraphs: [
          'Dùng gạc sạch thấm nước muối sinh lý, lau nhẹ từ khóe mắt ra ngoài, mỗi bên mắt dùng một miếng gạc riêng. Nếu mắt bé đỏ, chảy nhiều dịch hoặc bé hay dụi mắt, nên đưa bé đi khám thay vì tự nhỏ thuốc.',
        ],
      },
      {
        heading: 'Tắm với tần suất hợp lý',
        paragraphs: [
          'Tắm quá thường xuyên có thể làm khô da. Tần suất phù hợp tùy giống, độ dài lông và môi trường sống của bé; hãy dùng sữa tắm dành riêng cho thú cưng và sấy khô hoàn toàn sau khi tắm.',
        ],
      },
    ],
  },
  {
    slug: 'kham-dinh-ky-cho-meo',
    category: 'Kiến thức',
    title: 'Vì sao mèo cần được kiểm tra sức khỏe định kỳ',
    excerpt:
      'Mèo giỏi che giấu bệnh, khám định kỳ giúp phát hiện sớm vấn đề về răng, thận và tiêu hóa.',
    image: {
      src: '/images/posts/kham-dinh-ky-cho-meo.webp',
      alt: 'Bác sĩ thú y nghe tim phổi cho bé mèo lông vàng',
    },
    body: [
      {
        paragraphs: [
          'Theo bản năng, mèo thường che giấu sự khó chịu. Khi các biểu hiện bệnh đã rõ ràng, vấn đề có thể đã tiến triển một thời gian. Kiểm tra định kỳ giúp bác sĩ phát hiện những thay đổi nhỏ từ sớm.',
        ],
      },
      {
        heading: 'Một buổi kiểm tra thường gồm',
        items: [
          'Khám tổng quát: cân nặng, răng miệng, mắt, tai, da lông, nghe tim phổi.',
          'Tùy tình trạng và độ tuổi, bác sĩ có thể đề nghị thêm xét nghiệm máu hoặc chẩn đoán hình ảnh.',
        ],
      },
      {
        heading: 'Bao lâu nên khám một lần',
        paragraphs: [
          'Tần suất khám phù hợp phụ thuộc vào độ tuổi và sức khỏe của từng bé. Bác sĩ sẽ tư vấn lịch kiểm tra cụ thể sau buổi khám đầu tiên.',
        ],
      },
    ],
  },
]
