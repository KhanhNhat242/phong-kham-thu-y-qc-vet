/**
 * Nguồn dữ liệu duy nhất cho thông tin doanh nghiệp (CLAUDE.md mục 3).
 * Đổi SĐT / địa chỉ / giờ mở cửa… chỉ sửa tại đây.
 */

export type NavItem = {
  label: string
  href: string
}

export type Phone = {
  /** Dạng hiển thị, có khoảng trắng */
  display: string
  /** Dạng dùng cho link tel:/zalo, chỉ chữ số */
  raw: string
}

const hotline: Phone = { display: '0986 901 080', raw: '0986901080' }

export const siteConfig = {
  name: 'Phòng Khám Thú Y QC VET',
  shortName: 'QC VET',
  /** Slogan in trên tường lễ tân (ảnh khách gửi) */
  slogan: 'Dành cả trái tim cho tình yêu thú cưng',
  description:
    'Phòng khám thú y trọn gói tại Định Công, Hà Nội: khám và tư vấn, xét nghiệm máu, siêu âm – X-quang, phẫu thuật và spa cho chó mèo.',
  url: 'https://qcvet.vn', // TODO(xác nhận): tên miền chính thức

  hotline,
  /** SĐT phụ in trên banner của khách */
  secondaryPhone: { display: '0969 861 080', raw: '0969861080' } satisfies Phone,
  telHref: `tel:${hotline.raw}`,
  zaloHref: `https://zalo.me/${hotline.raw}`,
  facebookHref: 'https://www.facebook.com/profile.php?id=61591659506968',

  address: {
    // TODO(xác nhận): địa chỉ đọc từ banner của khách, nhờ sale xác nhận lần cuối
    street: 'Ngõ 160 Phố Trịnh Đình Cửu',
    ward: 'Định Công',
    city: 'Hà Nội',
    full: 'Ngõ 160 Phố Trịnh Đình Cửu, Định Công, Hà Nội',
  },
  geo: { lat: 20.982369, lng: 105.8346554 },
  mapsHref:
    'https://www.google.com/maps/place/Ph%C3%B2ng+Kh%C3%A1m+Th%C3%BA+Y+QC+Vet/@20.982369,105.8346554,813m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3135ad0061b825cd:0xe74e82cd9eb2f9a9!2zUGjDsm5nIEtow6FtIFRow7ogWSBRQyBWZXQ!8m2!3d20.982369!4d105.8346554!10e5!16s%2Fg%2F11npxh0_c8!3m5!1s0x3135ad0061b825cd:0xe74e82cd9eb2f9a9!8m2!3d20.982369!4d105.8346554!16s%2Fg%2F11npxh0_c8?entry=ttu',
  mapsEmbedSrc: 'https://www.google.com/maps?q=20.982369,105.8346554&z=17&output=embed',

  // TODO(xác nhận): giờ mở cửa tạm tính, chưa có trong phiếu
  openingHours: {
    label: '8:00 – 20:00 hằng ngày',
    schema: 'Mo-Su 08:00-20:00',
  },

  logo: '/images/logo/qc-vet-logo.webp',
  copyrightYear: 2026,

  /**
   * Menu chính. Hiện là landing page một trang nên trỏ tới anchor của section;
   * khi các trang con (REQUIREMENTS 7.1) hoàn thành thì đổi sang route tương ứng.
   */
  nav: [
    { label: 'Giới thiệu', href: '/#gioi-thieu' },
    { label: 'Dịch vụ', href: '/#dich-vu' },
    { label: 'Đội ngũ bác sĩ', href: '/#doi-ngu-bac-si' },
    { label: 'Thư viện ảnh', href: '/#thu-vien-anh' },
    { label: 'Kiến thức', href: '/#kien-thuc' },
    { label: 'Liên hệ', href: '/#lien-he' },
  ] satisfies NavItem[],

  /** Anchor của khu vực form đặt lịch */
  bookingAnchor: 'dat-lich',
} as const

export type SiteConfig = typeof siteConfig
