# Giscord

Giscord là một dự án clone của Discord, được xây dựng bằng **Next.js** kết hợp với các công nghệ hiện đại như **Shadcn/UI**, **Socket.io**, **Clerk**, **Prisma**, và **MySQL**. Dự án này mang đến trải nghiệm trò chuyện theo thời gian thực với khả năng quản lý người dùng, kênh và tin nhắn.

## Mục tiêu

- Tạo ra một nền tảng giao tiếp theo thời gian thực, mô phỏng chức năng của Discord.
- Cung cấp các tính năng như quản lý kênh, người dùng, và trò chuyện nhóm.
- Xây dựng trải nghiệm người dùng mượt mà, nhanh chóng và bảo mật.

## Tính năng

- **Đăng ký/Đăng nhập**: Sử dụng **Clerk** để xác thực và quản lý người dùng một cách an toàn.
- **Trò chuyện thời gian thực**: Sử dụng **Socket.io** để gửi và nhận tin nhắn trong thời gian thực giữa các người dùng và kênh.
- **Quản lý kênh**: Người dùng có thể tạo, chỉnh sửa và quản lý kênh trò chuyện của riêng mình.
- **Tương tác trực quan**: Sử dụng **Shadcn/UI** để xây dựng giao diện người dùng hiện đại và tối ưu.
- **Dữ liệu người dùng**: Quản lý người dùng và các dữ liệu liên quan thông qua **Prisma** và cơ sở dữ liệu **MySQL**.

## Công nghệ sử dụng

- **Next.js**: Framework React cho việc xây dựng ứng dụng web hiện đại.
- **Shadcn/UI**: Thư viện UI cho thiết kế giao diện mượt mà, tối ưu trải nghiệm người dùng.
- **Socket.io**: Thư viện hỗ trợ giao tiếp thời gian thực thông qua WebSockets.
- **Clerk**: Giải pháp toàn diện cho việc xác thực và quản lý người dùng.
- **Prisma**: ORM (Object-Relational Mapping) hỗ trợ kết nối và tương tác với cơ sở dữ liệu MySQL một cách dễ dàng.
- **MySQL**: Hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) lưu trữ dữ liệu người dùng, tin nhắn, kênh, v.v.

## Cấu trúc dự án

```bash
├── prisma/         # Cấu hình Prisma và migration cơ sở dữ liệu
├── public/         # Các file tĩnh như hình ảnh, font chữ
├── app/            # Thư mục chính của ứng dụng
├── components/     # Các thành phần UI của ứng dụng
├── hooks/          # Custom hooks cho logic ứng dụng
├── pages/          # Các trang chính của ứng dụng
├── services/       # Xử lý kết nối API, Socket.io
├── utils/          # Các hàm tiện ích
├── ...             # Các thư mục và file khác
└── ...
```

## Cài đặt dự án

1. Clone dự án về máy tính của bạn:

```bash
git clone https://github.com/RiverNguyen/discord.git
cd giscord
```

2. Cài đặt các thư viện cần thiết:

```bash
npm install
```

3. Khởi chạy ứng dụng:

```bash
npm run dev
```
