# Personal Portfolio Website — TRẦN NGỌC PHƯỢNG

Trang Portfolio cá nhân học phần **Nhập môn Công nghệ số và ứng dụng Trí tuệ nhân tạo** dành cho **TRẦN NGỌC PHƯỢNG** (MSSV: 2552210410, Lớp K20H – SPAN, Ngành Sư phạm Âm nhạc — Trường Đại học Sư phạm Nghệ thuật Trung ương).

Xây dựng bằng **React**, **Vite**, **TypeScript**, **Tailwind CSS** và **shadcn/ui**.

---

## 🌟 Tính Năng Nổi Bật

1. **Fullscreen Looping Background Video**:
   - Sử dụng video nền lặp toàn màn hình kèm hiệu ứng Canvas hạt sao và chòm sao đa tầng.
   - Bảng điều khiển độ sáng mờ (dimmer), tạm dừng/phát, bật/tắt tiếng tích hợp.
   - Khi có video riêng, bạn chỉ cần đặt tệp video vào `public/videos/hero-bg.mp4` hoặc `public/videos/hero-bg.webm`.

2. **Điều Hướng Glassmorphism (Thương hiệu PHƯỢNG)**:
   - Thanh điều hướng kính mờ nổi bật mang logo thương hiệu **PHƯỢNG**.
   - Tự động đánh dấu vị trí chuyên mục đang cuộn tới, hỗ trợ menu trượt mượt mà trên điện thoại.

3. **Phong Cách Typography Cinematic**:
   - Tiêu đề sử dụng font *Cinzel* sang trọng với hiệu ứng ánh vàng gold gradient.
   - Nội dung hiển thị sắc nét với font *Inter* và *JetBrains Mono*.

4. **Cấu Trúc Nội Dung Chuẩn Xác Từ Hồ Sơ Học Phần & CV**:
   - **Hero Section**: Tiêu đề TRẦN NGỌC PHƯỢNG, MSSV 2552210410, Lớp K20H – SPAN, ảnh chân dung và các nút điều hướng.
   - **About Section**: Giới thiệu bản thân, mục tiêu học tập, mục tiêu xây dựng Portfolio, quê quán Lào Cai, sở thích chơi đàn và hát.
   - **Học Vấn & Thành Tích**: Quá trình đào tạo tại Trường ĐH Sư phạm Nghệ thuật Trung ương, các cột mốc đánh giá học phần.
   - **Kỹ Năng & Năng Lực**: 3 nhóm kỹ năng (Âm nhạc & Sư phạm, Công nghệ số & AI, Hợp tác & Liêm chính học thuật).
   - **Thực Hành Sư Phạm**: Quá trình rèn luyện chuyên môn nghệ thuật và thực hành kỹ năng số.
   - **Danh Mục 6 Bài Tập Học Phần**:
     1. *Bài tập 1*: Thao tác cơ bản với tệp tin và thư mục (Chương 1).
     2. *Bài tập 2*: Tìm kiếm và đánh giá thông tin học thuật (Chương 2 - AI trong sáng tác và sản xuất âm nhạc).
     3. *Bài tập 3*: Viết Prompt hiệu quả cho các tác vụ học tập (Chương 3 - Thiết kế dạy học cao độ & giai điệu).
     4. *Bài tập 4*: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm (Chương 4).
     5. *Bài tập 5*: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung (Chương 5).
     6. *Bài tập 6*: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu (Chương 6).
   - **Liên Hệ & Giao Lưu**: Thẻ thông tin MSSV, chuyên ngành, quê quán cùng biểu mẫu gửi tin nhắn trực tiếp.
   - **Footer Chân Trang**: Thương hiệu PHƯỢNG và dòng thông tin bản quyền chuẩn xác.

---

## 🚀 Hướng Dẫn Chạy Trang Web

### Cách 1: Chạy Nhanh Bằng 1 Cú Click
Nhấp đúp chuột vào tệp `start.bat` trong thư mục này. Website sẽ khởi động tại:
```
http://localhost:3000
```

### Cách 2: Chạy Qua Terminal
Mở PowerShell tại thư mục `c:\Users\Admin\Desktop\cv` và chạy:
```powershell
npm run dev
```

### Đóng Gói Bản Sản Xuất (Build)
```powershell
npm run build
```
*(Đã kiểm thử: bản build tạo thành công 100% trong thư mục dist/ không có lỗi).*
