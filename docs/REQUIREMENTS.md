# TÀI LIỆU YÊU CẦU — WEBSITE PHÒNG KHÁM THÚ Y QC VET

> Nguồn: **Phiếu Dev 66** (sale ghi ngày 13/11/2026).
> Đây là **nguồn sự thật duy nhất (single source of truth)** về yêu cầu của dự án.
> Mọi thay đổi yêu cầu phải cập nhật vào file này trước, rồi mới sửa code.
> Ký hiệu: **[PHIẾU]** = thông tin lấy nguyên văn từ phiếu · **[SUY LUẬN]** = do dev đề xuất/suy ra khi phiếu để trống · **[CHƯA CÓ]** = phiếu bỏ trống, cần sale bổ sung.

---

## 1. Thông tin hồ sơ (từ phiếu)

| Trường | Giá trị | Ghi chú |
|---|---|---|
| STT phiếu | 66 | [PHIẾU] |
| Ngày giao hồ sơ | 13/11/2026 | [PHIẾU] |
| Sale phụ trách | Minh Toàn | [PHIẾU] |
| Mã DN | DN0149 | [PHIẾU] |
| Tên doanh nghiệp | **Phòng Khám Thú Y QC VET** | [PHIẾU] — viết đúng chính tả & hoa/thường: "QC VET" (logo/Maps ghi "QC Vet") |
| Ngành (theo phiếu) | Spa / Thẩm mỹ / Làm đẹp | ⚠️ Phiếu ghi sai ngành. Thực tế là **phòng khám thú y** (có dịch vụ spa thú cưng). Thiết kế & nội dung theo hướng **phòng khám thú y**, không theo spa làm đẹp cho người. |
| Tỉnh / TP | Hà Nội | [PHIẾU] — khu vực **Định Công** và lân cận |
| Người liên hệ | — | [CHƯA CÓ] |
| SĐT / Zalo | **0986 901 080** (`0986901080`) | [PHIẾU] — dùng cho hotline, nút gọi, Zalo |
| SĐT phụ | 0969 861 080 | [ẢNH KHÁCH] — in trên banner `library/737518620_…jpg` cùng hotline chính |
| Địa chỉ chữ | Ngõ 160 Phố Trịnh Đình Cửu, Định Công, Hà Nội | [ẢNH KHÁCH] — in trên banner + biển ngõ trong ảnh; vẫn nhờ sale xác nhận lần cuối |
| Slogan | "Dành cả trái tim cho tình yêu thú cưng" | [ẢNH KHÁCH] — chữ nổi trên tường lễ tân |
| Facebook Page | https://www.facebook.com/profile.php?id=61591659506968 | [PHIẾU] |
| Google Maps | Toạ độ `20.982369, 105.8346554` · Place: `0x3135ad0061b825cd:0xe74e82cd9eb2f9a9` | [PHIẾU] — link gốc ở mục 1.1 |
| Website hiện tại | — | [CHƯA CÓ] → khách chưa có website |
| Khách đồng ý xem demo? | — | [CHƯA CÓ] |
| Link Logo (Drive) | https://drive.google.com/drive/u/0/folders/1G1MBXYhBW3xfUIcwBzxXvyfw5x-qWUXB | [PHIẾU] — cùng thư mục với ảnh |
| Link ảnh / tư liệu (Drive) | https://drive.google.com/drive/u/0/folders/1G1MBXYhBW3xfUIcwBzxXvyfw5x-qWUXB | [PHIẾU] |
| Website tham khảo khách thích | — | [CHƯA CÓ] |
| Ngôn ngữ | — | [CHƯA CÓ] → mặc định **Tiếng Việt** [SUY LUẬN] |
| Ưu tiên (GĐ chọn) | — | [CHƯA CÓ] |
| Hạn giao demo | — | [CHƯA CÓ] — phiếu nhắc: **"SALE GHI HẠN"** |
| Ngày gửi khách | — | [CHƯA CÓ] |
| Phản hồi của khách | — | [CHƯA CÓ] |

### 1.1. Link Google Maps gốc

```
https://www.google.com/maps/place/Ph%C3%B2ng+Kh%C3%A1m+Th%C3%BA+Y+QC+Vet/@20.982369,105.8346554,813m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3135ad0061b825cd:0xe74e82cd9eb2f9a9!2zUGjDsm5nIEtow6FtIFRow7ogWSBRQyBWZXQ!8m2!3d20.982369!4d105.8346554!10e5!16s%2Fg%2F11npxh0_c8!3m5!1s0x3135ad0061b825cd:0xe74e82cd9eb2f9a9!8m2!3d20.982369!4d105.8346554!16s%2Fg%2F11npxh0_c8?entry=ttu&g_ep=EgoyMDI2MTEwOC4wIKXMDSoASAFQAw%3D%3D
```

Nhúng bản đồ (iframe, không cần API key):
```
https://www.google.com/maps?q=20.982369,105.8346554&z=17&output=embed
```

### 1.2. Ô dev cần điền trên phiếu (khi xong)

1. Dev phụ trách
2. Trạng thái demo
3. Link demo
4. Trạng thái gửi sale → chọn **"Xong - chờ sale gửi"** khi hoàn tất (phiếu tự đóng)

---

## 2. Mục tiêu website

- **[PHIẾU]** Mục tiêu: **Giới thiệu công ty / dịch vụ.**
- Website là **site giới thiệu + thu lead** (gọi điện, Zalo, form đặt lịch). **Không** làm thương mại điện tử: không giỏ hàng, không thanh toán, không tài khoản người dùng.
- Chỉ số thành công của demo: khách mở web thấy ngay đây là phòng khám thú y uy tín, biết có dịch vụ gì, liên hệ được trong 1 chạm.

## 3. Dịch vụ chính (đúng 5 mục, đúng thứ tự)  [PHIẾU]

| # | Tên dịch vụ (hiển thị) | Slug đề xuất |
|---|---|---|
| 1 | Khám và tư vấn sức khỏe thú cưng | `kham-tu-van-suc-khoe` |
| 2 | Xét nghiệm máu | `xet-nghiem-mau` |
| 3 | Siêu âm – X-quang | `sieu-am-x-quang` |
| 4 | Phẫu thuật thú y | `phau-thuat-thu-y` |
| 5 | Spa – chăm sóc, vệ sinh thú cưng | `spa-cham-soc-ve-sinh` |

- Không tự thêm dịch vụ khác (tiêm phòng, lưu chuồng, bán thức ăn…) khi chưa được xác nhận.
- Mô tả chi tiết từng dịch vụ: phiếu **chưa có** → viết nội dung mẫu chung chung, đúng chuyên môn, không cam kết cụ thể (xem mục 8).

## 4. Khách hàng mục tiêu  [PHIẾU]

Người nuôi **chó, mèo tại Hà Nội**, đặc biệt **khu vực Định Công và lân cận**; cá nhân, hộ gia đình có nhu cầu khám bệnh, kiểm tra sức khỏe, điều trị hoặc chăm sóc thú cưng định kỳ.

→ Hệ quả thiết kế: giọng văn gần gũi, dễ hiểu (không quá học thuật); ưu tiên **mobile** (người dùng chủ yếu tìm trên điện thoại); nhấn mạnh **vị trí gần, gọi nhanh, đặt lịch dễ**; hình ảnh chủ đạo là **chó và mèo**.

## 5. Điểm mạnh / USP  [PHIẾU]

- **Dịch vụ trọn gói tại một cơ sở**: khám → xét nghiệm → chẩn đoán hình ảnh → phẫu thuật → spa.
- Có **hình ảnh thực tế** về hoạt động phòng khám (từ Fanpage/Drive).
- ⚠️ **"Chưa xác minh kinh nghiệm và chứng chỉ đội ngũ bác sĩ"** → TUYỆT ĐỐI không ghi số năm kinh nghiệm, bằng cấp, chứng chỉ, giải thưởng, số ca đã điều trị… (xem mục 8).

## 6. Màu sắc & phong cách  [PHIẾU]

- **Xanh dương đậm – trắng – đỏ làm điểm nhấn**, đồng bộ với logo.
- Phong cách **hiện đại, sạch sẽ, chuyên nghiệp nhưng thân thiện, gần gũi** với người nuôi thú cưng.

Bảng màu đề xuất [SUY LUẬN — chỉnh lại theo mã màu logo thật khi tải được logo từ Drive]:

| Token | Giá trị | Dùng cho |
|---|---|---|
| `primary` | `#0B3D91` | Màu thương hiệu: header, tiêu đề, nút chính |
| `primary-dark` | `#082B66` | Hover, footer, nền tối |
| `primary-light` | `#E8F0FB` | Nền section nhạt, badge |
| `accent` | `#E31E24` | **Chỉ điểm nhấn**: CTA "Đặt lịch", nút gọi, icon nổi bật |
| `white` | `#FFFFFF` | Nền chính |
| `surface` | `#F6F9FD` | Nền section xen kẽ |
| `text` | `#0F172A` | Chữ chính |
| `muted` | `#536279` | Chữ phụ (đổi từ `#64748B` để đạt ≥ 4.5:1 cả trên `primary-light`) |

Quy tắc dùng màu: trắng là chủ đạo về diện tích, xanh đậm là màu nhận diện, **đỏ ≤ ~10% diện tích** (chỉ CTA/điểm nhấn). Không dùng tông be/nâu/pastel ấm.

Tương phản đã đo (WCAG):

| Cặp màu | Tỷ lệ | Quy định |
|---|---|---|
| `primary` trên trắng / `surface` / `primary-light` | 10.04 / 9.51 / 8.75 | Đạt |
| Chữ trắng trên nút `accent` | 4.69 | Vừa đạt → chữ trên nút đỏ luôn **đậm (≥ 600)** |
| `muted` `#536279` trên trắng / `surface` / `primary-light` | 6.19 / 5.86 / 5.39 | Đạt |
| `accent` trên `primary` / `primary-dark` | 2.14 / 2.89 | **Không đạt** → nút đỏ đặt trên nền xanh đậm phải có **viền trắng** (`ring-2 ring-white`) hoặc nằm trong khối nền trắng |
| Chữ trắng mờ trên nền xanh đậm | — | Tối thiểu `text-white/70`; không dùng `/50`, `/60` cho chữ |

### 6.1. Hệ phong cách UI (chốt 16/11/2026, đối chiếu styles.csv của ui-ux-pro-max)

| Mức | Style | Áp dụng |
|---|---|---|
| Chính | **Flat Design** | Khối màu phẳng xanh đậm/trắng, **không gradient**, không kính mờ (backdrop-blur), icon SVG nét rõ, hover đổi màu nhanh 150–200ms |
| Chính | **Soft UI Evolution** | Chỉ cho card / form / ảnh: **bóng mềm nhiều lớp** (`shadow-soft`, `shadow-soft-lg`), bo góc vừa (card 16px, nút & input 12px, khối ảnh lớn 24px). Không lấy palette pastel |
| Nền tảng | **Accessible & Ethical** | Focus ring 3px rõ ràng, skip link, vùng chạm ≥ 44px, chữ nội dung ≥ 16px (nhãn phụ ≥ 12px), label form, tôn trọng reduced motion |
| Bổ trợ | **Micro-interactions** | Form: validate tại chỗ, trạng thái đang gửi (spinner), thành công/lỗi; nút nhấn có phản hồi `:active`; nút nổi Gọi/Zalo |
| Theo khu vực | **Bento Box Grid** | Lưới 5 dịch vụ, cụm ảnh hero, thư viện ảnh |
| Theo trang | **Editorial Grid** | Chỉ cho `/tin-tuc`, `/tin-tuc/[slug]` |
| Chỉ mượn màu | Trust & Authority | Mượn tông xanh chuyên nghiệp + khối "Quy trình / Trọn gói". **Không** mượn huy hiệu, chứng chỉ, số liệu |

### 6.2. Không dùng các mẫu "AI slop"

- Không đặt badge/eyebrow dạng viên thuốc có icon trên mọi tiêu đề; nhãn phụ chỉ là chữ nhỏ, không lặp lại nội dung tiêu đề.
- Không thẻ thống kê/huy hiệu nổi trang trí trên ảnh; không hàng "icon vuông + tiêu đề + 1 dòng" lặp lại để lấp chỗ.
- Không số thứ tự (01, 02…) khi không có trình tự thật; chuỗi quy trình 5 bước thì được đánh số.
- Không hoạ tiết nền (dấu chân, chấm), đường lượn sóng, khối nền lệch sau ảnh, gạch chân vẽ tay.
- Chuyển động: chỉ hero hiện lúc tải trang + phản hồi tương tác; không hiệu ứng trượt khi cuộn ở mọi section.
- Tiêu đề H2/H3 viết hoa đầu câu theo tiếng Việt (H1 giữ nguyên slogan).
- Ưu tiên ảnh người/thú cưng thật của phòng khám thay cho icon minh hoạ.
- **Ngoại lệ đã duyệt — Hero**: bố cục theo ảnh mẫu khách gửi (16/11/2026): ảnh thú cưng tách nền (`hero/bull-phap-tach-nen.webp` từ `hero-img.png`) nằm trên khối trái tim (lấy từ logo) + gối màu xanh đậm, vài tia nhấn đỏ; tiêu đề 2 dòng (dòng 2 màu đỏ); nút/chip dạng viên thuốc. Màu vàng trong ảnh mẫu được thay bằng màu thương hiệu (trái tim `primary-light`) để giữ quy tắc đỏ ≤ ~10%.
- **Ngoại lệ đã duyệt — Giới thiệu (USP, phần trên)**: theo ảnh mẫu khách gửi: trái 2 ảnh chồng lệch dùng TiltedCard (React Bits: nghiêng theo chuột, glare, bấm để lật xem thông tin); phải nhãn + tiêu đề + mô tả + 3 ý có dấu tích + số điện thoại + 2 nút.
- **Ngoại lệ đã duyệt — Quy trình (USP)**: theo ảnh mẫu khách gửi: khối tiêu đề góc trên trái, đường cong đi lên từ dưới trái tới trên phải nối 5 bước, nút icon nổi trên đường, chữ mô tả ngay dưới nút, số thứ tự lớn mờ phía sau, vòng tròn nhạt ở nền phải; hover/focus/chạm vào bước nào thì thanh tiến trình chạy từ đầu tới bước đó.
- **Ngoại lệ đã duyệt — Đội ngũ**: cột trái tiêu đề + danh sách vai trò, cột phải chồng thẻ; khi cuộn, thẻ trên cùng trượt xuống rời đi để lộ thẻ kế. Ảnh bác sĩ là ảnh minh hoạ (không phải người thật của phòng khám) → luôn có nhãn "Ảnh minh hoạ", không gắn tên.
- **Ngoại lệ đã duyệt — Dịch vụ**: theo ảnh mẫu khách gửi: một hàng thẻ sát nhau, thẻ chính to (gần vuông) ở vị trí thứ 2 từ trái, thẻ phụ nhỏ hai bên, dưới là thanh tiến trình + số thứ tự. Khi cuộn trong section (được ghim), thẻ kế tiếp trượt từ phải sang trái và to dần thành thẻ chính. **Chỉ thẻ chính** có chữ đè lên ảnh (tên, mô tả, nút "Đặt lịch"; lớp phủ tối đủ tương phản); thẻ phụ chỉ có ảnh. Không hiện nút "Xem chi tiết" và dòng giá. Giảm chuyển động: không ghim, bấm số/thẻ để đổi.

Tránh: Claymorphism, Vibrant/Block-based, Neubrutalism, Memphis, Y2K, Sketch, Neumorphism, Organic/Nature (tông be), Dark Mode.

## 7. Sitemap & chức năng  [PHIẾU]

Phiếu yêu cầu: *Trang chủ; Giới thiệu phòng khám; Danh sách dịch vụ; Chi tiết dịch vụ; Đội ngũ bác sĩ; Thư viện ảnh; Tin tức/kiến thức chăm sóc thú cưng; Form yêu cầu tư vấn/đặt lịch khám; Nút gọi điện; Zalo; Google Maps.*

### 7.1. Trang (routes)  [SUY LUẬN về URL]

| Route | Trang | Nội dung tối thiểu |
|---|---|---|
| `/` | Trang chủ | Hero (tên + slogan + CTA Gọi/Đặt lịch) · 5 dịch vụ · USP "trọn gói tại 1 cơ sở" · giới thiệu ngắn · đội ngũ bác sĩ (rút gọn) · ảnh thực tế · kiến thức mới · form đặt lịch / CTA · bản đồ |
| `/gioi-thieu` | Giới thiệu phòng khám | Câu chuyện/sứ mệnh (nội dung mẫu), cơ sở vật chất, quy trình khám, cam kết chung |
| `/dich-vu` | Danh sách dịch vụ | 5 thẻ dịch vụ → link chi tiết |
| `/dich-vu/[slug]` | Chi tiết dịch vụ | Mô tả, khi nào cần, quy trình, lưu ý, FAQ, CTA đặt lịch (pre-chọn dịch vụ), dịch vụ liên quan. **Giá: "Liên hệ"** |
| `/doi-ngu-bac-si` | Đội ngũ bác sĩ | Thẻ bác sĩ (ảnh, tên, vai trò chung chung). Không ghi bằng cấp/kinh nghiệm |
| `/thu-vien-anh` | Thư viện ảnh | Lưới ảnh + lightbox; có thể lọc theo nhóm (Phòng khám / Thú cưng / Spa) |
| `/tin-tuc` | Tin tức / Kiến thức | Danh sách bài viết chăm sóc thú cưng |
| `/tin-tuc/[slug]` | Chi tiết bài viết | Nội dung bài, bài liên quan, CTA |
| `/lien-he` | Liên hệ / Đặt lịch | Form đặt lịch đầy đủ, hotline, Zalo, Facebook, bản đồ, giờ mở cửa (placeholder) |

### 7.2. Thành phần dùng chung (mọi trang)

- **Header**: logo, menu (đủ các trang trên), nút "Đặt lịch khám" (màu accent), số hotline trên desktop. Mobile: menu drawer.
- **Footer**: tên, địa chỉ, hotline, Zalo, Facebook, giờ mở cửa, link nhanh dịch vụ, bản quyền.
- **Nút nổi (floating)** góc phải dưới, luôn hiển thị: **Gọi điện** (`tel:0986901080`), **Zalo** (`https://zalo.me/0986901080`), (tuỳ chọn) Messenger/Facebook.
- **Google Maps**: nhúng iframe ở trang chủ/liên hệ + nút "Chỉ đường" mở link Maps gốc.

### 7.3. Form yêu cầu tư vấn / đặt lịch khám

Trường:
| Trường | Bắt buộc | Kiểu |
|---|---|---|
| Họ tên chủ nuôi | ✔ | text |
| Số điện thoại | ✔ | tel, validate SĐT Việt Nam (10 số, bắt đầu 0) |
| Loại thú cưng | ✔ | Chó / Mèo / Khác |
| Tên thú cưng | | text |
| Dịch vụ quan tâm | ✔ | select 5 dịch vụ + "Khác / Cần tư vấn" |
| Ngày mong muốn | | date (không cho chọn quá khứ) |
| Khung giờ | | Sáng / Chiều / Tối |
| Mô tả tình trạng / ghi chú | | textarea |

Hành vi:
- Validate phía client **và** server.
- Phiếu **không chỉ định** nơi nhận dữ liệu → bản demo: Server Action xử lý & trả về thông báo thành công ("Phòng khám sẽ liên hệ lại sớm"); kèm gợi ý gọi hotline nếu cần gấp. Kênh nhận thật (email/Google Sheet/Zalo OA…) = **[CHƯA CÓ]**, để TODO rõ ràng.
- Không lưu/thu thập dữ liệu nhạy cảm ngoài các trường trên.

## 8. Nội dung — có gì, thiếu gì, làm thế nào

**Đã có [PHIẾU]:** tên thương hiệu, danh sách dịch vụ, địa chỉ (qua Maps), hotline, logo tham khảo, hình ảnh từ Fanpage.

**Chưa có [PHIẾU]:** nội dung giới thiệu chi tiết, **bảng giá được xác nhận**.

**Lưu ý của sale [PHIẾU]:** *"ảnh hơi ít, lấy thêm ảnh mạng minh hoạ nha"*.

Quy định xử lý:
1. **Giá**: không hiển thị bất kỳ con số giá nào. Dùng "Liên hệ" / "Báo giá sau khi thăm khám".
2. **Bác sĩ**: dùng tên/ảnh placeholder (vd. "BS. Thú y" + vai trò), không bịa bằng cấp, năm kinh nghiệm, trường đào tạo, chứng chỉ.
3. **Số liệu**: không bịa "10.000+ thú cưng", "15 năm kinh nghiệm", "đánh giá 5★", testimonial có tên thật… Nếu cần khối số liệu/đánh giá cho bố cục → dùng nội dung trung tính hoặc đánh dấu rõ là mẫu.
4. **Nội dung giới thiệu / mô tả dịch vụ / bài viết**: viết nội dung mẫu đúng chuyên môn thú y, giọng thân thiện, không cam kết kết quả điều trị ("chữa khỏi 100%"…).
5. **Địa chỉ chữ**: lấy từ banner của khách: "Ngõ 160 Phố Trịnh Đình Cửu, Định Công, Hà Nội" (kèm TODO nhờ sale xác nhận); không bịa thêm số nhà.
6. **Giờ mở cửa**: [CHƯA CÓ] → placeholder có TODO (vd. "8:00 – 20:00 hằng ngày — cần xác nhận").
7. **Ảnh**:
   - Ưu tiên ảnh thật từ Drive/Fanpage của khách.
   - Bổ sung ảnh mạng minh hoạ từ nguồn **miễn phí bản quyền** (Unsplash, Pexels, Pixabay). Chủ đề: chó/mèo, bác sĩ thú y, phòng khám sạch sẽ, spa thú cưng.
   - Không dùng ảnh có logo/tên phòng khám khác, ảnh máu me/phẫu thuật gây sốc.
   - Tải về lưu trong `public/images/...`, ghi nguồn vào `docs/IMAGE_CREDITS.md`.
8. **Logo**: `public/images/temp-logo.png` hiện là **placeholder** (icon quả địa cầu) → thay bằng logo thật từ Drive; chỉnh lại bảng màu mục 6 theo logo thật.

## 9. Yêu cầu phi chức năng [SUY LUẬN]

- **Ngôn ngữ**: Tiếng Việt (`<html lang="vi">`), font hỗ trợ đầy đủ dấu tiếng Việt.
- **Responsive**: mobile-first; kiểm tra 360px, 768px, 1280px+. Không tràn ngang.
- **Hiệu năng**: ảnh qua `next/image`, có kích thước/`sizes`; LCP tốt trên mobile.
- **SEO**: metadata riêng từng trang (title, description, OG), tiêu đề dạng `"<Trang> | Phòng Khám Thú Y QC VET"`; JSON-LD `VeterinaryCare` (tên, SĐT, toạ độ, địa chỉ); sitemap.xml, robots.txt.
- **Accessibility**: alt ảnh tiếng Việt có nghĩa, tương phản đủ, focus rõ, tôn trọng `prefers-reduced-motion`.
- **Không dark mode** (giữ nhận diện xanh–trắng–đỏ nhất quán).

## 10. Tiêu chí nghiệm thu demo (Definition of Done)

- [ ] Đủ 9 trang ở mục 7.1, menu điều hướng đầy đủ, không link chết.
- [ ] Đúng & đủ 5 dịch vụ, đúng tên, đúng thứ tự; mỗi dịch vụ có trang chi tiết.
- [ ] Hotline `0986 901 080`, nút gọi, nút Zalo hoạt động trên mọi trang (mobile & desktop).
- [ ] Google Maps hiển thị đúng vị trí `20.982369, 105.8346554` + nút chỉ đường.
- [ ] Form đặt lịch validate & gửi được, có thông báo thành công/lỗi.
- [ ] Màu xanh dương đậm – trắng – đỏ nhấn; không còn style/tên của project cũ (vd. "Booking Homestay", màu be `#EFE8DC`).
- [ ] Không có giá, bằng cấp, số liệu bịa đặt.
- [ ] Responsive tốt ở 360px; `npm run build` và `npm run lint` không lỗi.
- [ ] Đã điền 4 ô dev trên phiếu.

## 11. Câu hỏi mở cần sale xác nhận

1. Hạn giao demo? (phiếu nhắc "SALE GHI HẠN")
2. Người liên hệ là ai? Khách đã đồng ý xem demo chưa?
3. Địa chỉ chữ chính xác, giờ mở cửa?
4. Tên/ảnh bác sĩ thật? Bảng giá?
5. Form đặt lịch gửi về đâu (email / Zalo / Google Sheet)?
6. Có cần đa ngôn ngữ không? (mặc định chỉ tiếng Việt)
7. Website tham khảo khách thích?
8. Ngành trên phiếu ghi "Spa / Thẩm mỹ / Làm đẹp" — xác nhận là phòng khám thú y.

---

## Nhật ký thay đổi yêu cầu

| Ngày | Thay đổi | Nguồn |
|---|---|---|
| 16/11/2026 | Tạo tài liệu từ Phiếu Dev 66 | Phiếu sale |
| 16/11/2026 | Thêm địa chỉ chữ, SĐT phụ, slogan đọc từ ảnh khách gửi (ký hiệu [ẢNH KHÁCH]). Bảng giá khách sạn & poster khuyến mãi trong kho ảnh **không dùng** (chưa xác nhận giá, ngoài 5 dịch vụ). | Ảnh trong `public/images/library` |
| 16/11/2026 | Bản landing page một trang (`/`) theo mô tả thiết kế chi tiết của khách: 7 section + header/footer/nút nổi; menu trỏ tới các section bằng anchor | Mô tả thiết kế (user) |
| 16/11/2026 | Chốt hệ phong cách UI (mục 6.1) + bảng tương phản; đổi token `muted` `#64748B` → `#536279` | Phân tích style (user) |
| 16/11/2026 | Hero làm lại theo ảnh mẫu khách gửi (mục 6.2 – ngoại lệ Hero) | Ảnh mẫu (user) |
| 16/11/2026 | USP phần trên làm lại theo ảnh mẫu + TiltedCard cho 2 ảnh | Yêu cầu user |
| 16/11/2026 | Dịch vụ: làm lại dạng hàng thẻ trượt & phóng to theo cuộn, chỉ thẻ chính có chữ (theo ảnh mẫu) | Yêu cầu user |
| 16/11/2026 | USP: đổi 2 ảnh trái (Poodle sau spa + quầy lễ tân) cho khớp bố cục mẫu; quy trình làm lại dạng đường cong đi lên + khối tiêu đề | Yêu cầu user |
| 16/11/2026 | Tiêu đề Hero dùng hiệu ứng gấp giấy FoldText (React Bits); **thêm dependency `gsap`** (bắt buộc cho FoldText — yêu cầu của khách) | Yêu cầu user |
| 16/11/2026 | Dịch vụ: bỏ icon, nút "Xem chi tiết", dòng giá; panel giãn khi hover thay vì theo cuộn | Yêu cầu user |
| 16/11/2026 | Đội ngũ: chồng thẻ cuộn (ảnh minh hoạ `staff1–3`, gắn nhãn "Ảnh minh hoạ"); 3 vai trò đổi thành 3 vị trí bác sĩ cho khớp ảnh | Yêu cầu user |
| 16/11/2026 | Quy trình USP dạng đường cong + thanh tiến trình khi hover; Dịch vụ dạng dải panel co giãn theo cuộn (mục 6.2 – ngoại lệ) | Ảnh mẫu (user) |
| 16/11/2026 | Gỡ các mẫu "AI slop" (mục 6.2): bỏ badge viên thuốc có icon, thẻ nổi trang trí trên ảnh, số thứ tự giả 01–05, hoạ tiết dấu chân, đường lượn sóng, hiệu ứng trượt khi cuộn ở mọi section; tiêu đề H2 về dạng viết hoa đầu câu; đội ngũ dùng ảnh nhân viên thật thay 3 thẻ icon; bỏ câu "Chỉ trong 1 phút" | Review ui-taste (user) |
