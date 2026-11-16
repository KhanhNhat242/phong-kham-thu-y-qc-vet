@AGENTS.md
@docs/REQUIREMENTS.md

# RULES — Website Phòng Khám Thú Y QC VET

Các quy tắc dưới đây là **bắt buộc** cho mọi thay đổi trong repo (code, nội dung, ảnh, cấu hình) — dù do người hay AI thực hiện.
Khi có mâu thuẫn: `docs/REQUIREMENTS.md` (yêu cầu khách) > file này (cách làm) > thói quen/mặc định cá nhân.

## 0. Quy trình bắt buộc trước khi làm bất cứ việc gì

1. Đọc `docs/REQUIREMENTS.md`. Việc định làm phải truy được về một mục trong đó.
2. Nếu yêu cầu mới **không có** trong REQUIREMENTS → cập nhật REQUIREMENTS trước (mục liên quan + "Nhật ký thay đổi yêu cầu"), rồi mới code.
3. Nếu yêu cầu mới **mâu thuẫn** REQUIREMENTS (vd. thêm giá, thêm giỏ hàng, đổi màu chủ đạo) → dừng lại và hỏi người dùng, không tự quyết.
4. Trước khi viết code dùng API Next.js, đọc guide tương ứng trong `node_modules/next/dist/docs/` (xem AGENTS.md). Đây là Next **16.4** — không viết theo trí nhớ Next 13/14.
5. Sau khi làm: chạy `npm run lint` và `npm run build`; đối chiếu checklist mục 10 REQUIREMENTS cho phần vừa làm.

## 1. Phạm vi sản phẩm (KHÔNG được vượt)

- Site **giới thiệu + thu lead**. KHÔNG làm: giỏ hàng, thanh toán, đăng nhập/tài khoản, trang quản trị, đa ngôn ngữ — trừ khi REQUIREMENTS được cập nhật.
- Đúng **5 dịch vụ**, đúng tên & thứ tự như REQUIREMENTS mục 3. Không tự thêm dịch vụ.
- Đúng **9 route** ở REQUIREMENTS mục 7.1. Thêm route mới = phải cập nhật REQUIREMENTS trước.
- Ngành là **phòng khám thú y** (phiếu ghi nhầm "Spa / Thẩm mỹ / Làm đẹp") — không thiết kế theo kiểu spa làm đẹp cho người.

## 2. Quy tắc nội dung (vi phạm = lỗi nghiêm trọng)

- **KHÔNG bịa**: giá tiền, bằng cấp/chứng chỉ/số năm kinh nghiệm bác sĩ, số liệu thành tích ("10.000+ ca"), giải thưởng, đánh giá/testimonial gắn tên người thật, số nhà cụ thể, cam kết kết quả điều trị ("khỏi 100%").
- Giá → luôn "Liên hệ" / "Báo giá sau khi thăm khám".
- Thông tin chưa xác nhận (giờ mở cửa, địa chỉ chữ, tên bác sĩ, kênh nhận form) → placeholder hợp lý + comment `// TODO(xác nhận): ...` trong file dữ liệu.
- Ngôn ngữ hiển thị: **Tiếng Việt có dấu đầy đủ, đúng chính tả**, giọng thân thiện – chuyên nghiệp, xưng "chúng tôi"/"phòng khám", gọi khách "bạn", thú cưng là "bé"/"thú cưng".
- Tên thương hiệu viết thống nhất: **"Phòng Khám Thú Y QC VET"** (dạng ngắn: "QC VET").
- Hotline hiển thị `0986 901 080`; link dùng `tel:0986901080`, Zalo `https://zalo.me/0986901080`.

## 3. Single source of truth cho dữ liệu

Không hard-code thông tin doanh nghiệp rải rác trong component. Tất cả lấy từ:

| File | Chứa |
|---|---|
| `lib/site-config.ts` | Tên, slogan, hotline, Zalo, Facebook, địa chỉ, toạ độ, link Maps, embed Maps, giờ mở cửa, menu điều hướng |
| `data/services.ts` | 5 dịch vụ: `slug`, `name`, `shortDescription`, `content`, `icon`, `image`, `faqs` |
| `data/doctors.ts` | Đội ngũ bác sĩ (placeholder, không bằng cấp) |
| `data/gallery.ts` | Ảnh thư viện: `src`, `alt`, `category`, `source` |
| `data/posts.ts` | Bài viết tin tức/kiến thức |

Đổi SĐT/địa chỉ/dịch vụ chỉ được sửa ở **một chỗ**. Mọi dữ liệu phải có type TypeScript rõ ràng (không `any`).

## 4. Kỹ thuật (Next.js 16 / React 19 / antd 6 / Tailwind 4)

- **App Router**, TypeScript strict. Không dùng `pages/`.
- **Server Component mặc định.** Chỉ thêm `'use client'` cho component thật sự cần state/effect/event (form, menu mobile, lightbox, nút nổi…), và đặt ở **lá** của cây — không đánh dấu cả page là client. (`app/page.tsx` hiện đang `'use client'` → phải chuyển thành Server Component khi build trang chủ.)
- `params` / `searchParams` là **Promise** → `await params`. Route động `[slug]` dùng `generateStaticParams` từ file `data/`.
- Dự án bật `cacheComponents: true` → đọc `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md` trước khi làm phần dữ liệu/route động.
- Form đặt lịch: **Server Action** + validate ở cả client và server; xem `02-guides/forms.md`, `02-guides/server-actions.md`.
- Metadata: export `metadata`/`generateMetadata` ở mỗi page; title template ở root layout: `"%s | Phòng Khám Thú Y QC VET"`.
- Ảnh: luôn `next/image` (không `<img>` trần), có `alt` tiếng Việt, `sizes` hợp lý; ảnh lưu local trong `public/images/<nhóm>/`. Nếu bắt buộc dùng ảnh remote → khai báo `images.remotePatterns` trong `next.config.ts`.
- Link nội bộ: `next/link`. Link ngoài (Facebook, Zalo, Maps): `target="_blank" rel="noopener noreferrer"`.
- Không thêm thư viện mới nếu antd/Tailwind/React đã làm được. Thêm dependency phải có lý do ghi trong mô tả thay đổi.

### 4.1. Cấu trúc thư mục

```
app/                 # routes (gioi-thieu, dich-vu/[slug], doi-ngu-bac-si, thu-vien-anh, tin-tuc/[slug], lien-he)
  _components/       # (hoặc components/) — component dùng chung
components/
  layout/            # Header, Footer, FloatingContact
  sections/          # các section trang chủ / trang con
  ui/                # nút, thẻ, tiêu đề section... tái sử dụng
lib/                 # site-config, utils, validation
data/                # services, doctors, gallery, posts
public/images/       # logo/, services/, gallery/, doctors/, posts/
docs/                # REQUIREMENTS.md, IMAGE_CREDITS.md
```

- Tên file component: `PascalCase.tsx`; route folder: `kebab-case` tiếng Việt không dấu (khớp REQUIREMENTS 7.1).
- Một component một file; file > ~250 dòng thì tách.

## 5. Thiết kế & style

- Bảng màu theo REQUIREMENTS mục 6. Khai báo **một lần** làm design token: CSS variables + `@theme` trong `app/globals.css` **và** `ConfigProvider` theme token của antd — hai nơi phải cùng giá trị. Không viết mã hex rải rác trong component.
- **Đỏ (accent) chỉ cho điểm nhấn/CTA**, không dùng làm nền diện tích lớn. Trắng chiếm diện tích chính, xanh dương đậm là màu nhận diện.
- Không dark mode. Không dùng tông be/nâu/pastel ấm, glassmorphism kem… còn sót từ project cũ.
- Font hỗ trợ tiếng Việt: khi load `next/font/google` phải có subset `"vietnamese"`; `body` phải dùng biến font (không để `Arial` đè).
- Ưu tiên Tailwind cho layout/spacing; antd cho component tương tác (Form, Select, DatePicker, Drawer, Image preview…). Không trộn CSS-in-JS khác.
- Mobile-first; kiểm tra 360px / 768px / 1280px. Không tràn ngang. Vùng bấm ≥ 44px.
- Animation: chỉ hero hiện khi tải trang (`data-hero`) + phản hồi tương tác; **không** gắn `data-reveal` (trượt khi cuộn) cho mọi section; phải tôn trọng `prefers-reduced-motion`.
- **Chống AI slop**: tuân thủ REQUIREMENTS mục 6.2 (không badge viên thuốc có icon, không thẻ nổi trang trí, không số thứ tự giả, không hoạ tiết nền/lượn sóng, H2 viết hoa đầu câu).
- Mọi trang có: Header, Footer, nút nổi Gọi + Zalo. CTA "Đặt lịch khám" luôn dễ thấy.
- **Phong cách UI theo REQUIREMENTS mục 6.1**: Flat (không gradient, không backdrop-blur, không bóng màu `shadow-primary/..`) + bóng mềm Soft UI chỉ qua token `shadow-soft` / `shadow-soft-lg` cho card/form/ảnh. Nút & input bo 12px (`rounded-xl`), card 16px (`rounded-2xl`), khối ảnh lớn 24px (`rounded-3xl`); badge/chip mới được bo tròn hẳn. Hover: đổi màu 150–200ms, card nâng nhẹ; nút có `active:scale-[0.98]`.
- **Accessible & Ethical**: focus ring dùng mặc định toàn cục trong globals.css (không xoá outline); trên nền tối đặt `data-surface="dark"` cho khối cha để ring chuyển trắng. Chữ nội dung ≥ 16px, nhãn phụ ≥ 12px; chữ trắng mờ trên nền tối ≥ `/70`. Nút đỏ trên nền xanh đậm phải có `ring-2 ring-white`. Chữ trên nút đỏ ≥ font-semibold.
- **Không để rớt 1 chữ xuống dòng cuối** ở mọi đoạn text (desktop/tablet/mobile): mọi tiêu đề, mô tả, nội dung thẻ phải bọc `noOrphan()` từ `lib/typography.ts` (CSS `text-wrap` trong globals.css chỉ là lớp phụ). Số điện thoại dùng `whitespace-nowrap`.
- Nhịp section: `py-14` mobile, `lg:py-20`–`lg:py-24` desktop; cụm tiêu đề dùng `components/ui/SectionHeading.tsx` (mb-12); lưới `gap-6` / `lg:gap-8`; khung `max-w-7xl px-4 sm:px-6 lg:px-8`; nền xen kẽ trắng ↔ `bg-surface`.
- `AntdRegistry` phải giữ prop `layer` (CSS antd nằm trong `@layer antd`), nếu bỏ thì antd sẽ đè màu/nền của mọi thẻ `<a>` dùng class Tailwind.
- Không truyền class ẩn/hiện (`hidden sm:…`) vào `ButtonLink` vì sẽ xung đột với `inline-flex` của nó; bọc bằng một thẻ ngoài.

## 6. Ảnh & bản quyền

- Ưu tiên ảnh thật từ Drive/Fanpage khách; thiếu thì dùng ảnh miễn phí bản quyền (Unsplash / Pexels / Pixabay).
- Mỗi ảnh mạng thêm vào phải ghi một dòng trong `docs/IMAGE_CREDITS.md` (file, nguồn, link, tác giả).
- Cấm: ảnh có logo/tên phòng khám khác, watermark, ảnh máu me/phẫu thuật gây sốc, ảnh AI méo mó chó/mèo.
- Tối ưu dung lượng (≤ ~300KB/ảnh, ưu tiên `.webp`/`.jpg`); tên file `kebab-case` không dấu.
- `public/images/temp-logo.png` là placeholder → thay bằng logo thật khi có; khi đó rà lại màu token.

## 7. SEO & accessibility

- Mỗi page: `title`, `description` riêng, có từ khoá địa phương ("phòng khám thú y Định Công", "Hoàng Mai, Hà Nội") một cách tự nhiên.
- `<html lang="vi">`. Có `app/sitemap.ts`, `app/robots.ts`, JSON-LD `VeterinaryCare` lấy dữ liệu từ `lib/site-config.ts`.
- Mỗi trang đúng một `<h1>`; heading theo thứ tự. Ảnh có alt có nghĩa; form có label; tương phản đạt WCAG AA.

## 8. Dọn tàn dư project cũ (phải xử lý khi đụng tới file)

- `app/layout.tsx`: title "Booking Homestay", description mặc định, `lang="en"`, font thiếu subset `vietnamese`.
- `app/globals.css`: border màu be `#EFE8DC`, `.glass-panel` tông kem, block dark mode, `font-family: Arial`.
- `README.md`: README mặc định create-next-app → thay bằng mô tả dự án + cách chạy.

## 9. Khi hoàn thành một phần việc

- Báo lại: đã làm gì, ứng với mục nào trong REQUIREMENTS, còn TODO(xác nhận) nào.
- Không tự commit/push/deploy nếu chưa được yêu cầu.
- Khi demo hoàn tất: nhắc dev điền 4 ô trên phiếu (REQUIREMENTS 1.2).
