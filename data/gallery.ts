/** Thư viện ảnh thực tế — ảnh của khách hàng (xem docs/IMAGE_CREDITS.md). */

export type GalleryCategory = 'phong-kham' | 'thu-cung' | 'spa'

export type GalleryImage = {
  src: string
  alt: string
  category: GalleryCategory
  width: number
  height: number
  source: 'Khách hàng' | 'Internet'
}

export const galleryCategories: { value: 'all' | GalleryCategory; label: string }[] = [
  { value: 'all', label: 'Tất cả' },
  { value: 'phong-kham', label: 'Phòng khám' },
  { value: 'thu-cung', label: 'Thú cưng' },
  { value: 'spa', label: 'Spa' },
]

/**
 * Thứ tự ở đây quan trọng: tab "Tất cả" lấy 7 ảnh đầu theo các ô cố định trong GalleryGrid
 * (cột 1: dọc + ngang · cột 2: dọc · giữa: vuông · cột 4: dọc · cột 5: dọc + ngang).
 */
export const galleryImages: GalleryImage[] = [
  {
    src: '/images/gallery/poodle-kem-sau-spa.webp',
    alt: 'Bé Poodle kem được vuốt ve sau khi spa',
    category: 'spa',
    width: 1000,
    height: 1333,
    source: 'Khách hàng',
  },
  {
    src: '/images/gallery/doi-meo-nam-suoi.webp',
    alt: 'Đôi mèo nằm sưởi ấm bên nhau',
    category: 'thu-cung',
    width: 1200,
    height: 797,
    source: 'Khách hàng',
  },
  {
    src: '/images/gallery/mat-tien-phong-kham.webp',
    alt: 'Mặt tiền tòa nhà Phòng Khám Thú Y QC VET',
    category: 'phong-kham',
    width: 1000,
    height: 1333,
    source: 'Khách hàng',
  },
  {
    src: '/images/gallery/bull-phap-quay-le-tan.webp',
    alt: 'Bé Bull Pháp nằm thư giãn tại quầy lễ tân QC VET',
    category: 'thu-cung',
    width: 1200,
    height: 1117,
    source: 'Khách hàng',
  },
  {
    src: '/images/gallery/kham-mat-poodle-nau.webp',
    alt: 'Bác sĩ kiểm tra mắt cho bé Poodle nâu',
    category: 'thu-cung',
    width: 1000,
    height: 1333,
    source: 'Khách hàng',
  },
  {
    src: '/images/gallery/poodle-trang-sau-spa.webp',
    alt: 'Bé Poodle trắng bông xù sau khi cắt tỉa',
    category: 'spa',
    width: 1000,
    height: 1333,
    source: 'Khách hàng',
  },
  {
    src: '/images/gallery/may-sieu-am.webp',
    alt: 'Màn hình máy siêu âm tại phòng khám',
    category: 'phong-kham',
    width: 1200,
    height: 907,
    source: 'Khách hàng',
  },
  {
    src: '/images/gallery/meo-cao-long-tao-kieu.webp',
    alt: 'Bé mèo vàng cạo lông tạo kiểu gọn gàng',
    category: 'spa',
    width: 1000,
    height: 1333,
    source: 'Khách hàng',
  },
  {
    src: '/images/gallery/poodle-cuoi-tuoi.webp',
    alt: 'Bé Poodle trắng cười tươi trên bàn grooming',
    category: 'spa',
    width: 1000,
    height: 1333,
    source: 'Khách hàng',
  },
  {
    src: '/images/gallery/so-tiem-phong.webp',
    alt: 'Sổ ghi nhận lịch trình tiêm phòng của QC VET',
    category: 'phong-kham',
    width: 1000,
    height: 1301,
    source: 'Khách hàng',
  },
]
