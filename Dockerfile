# 1. Base image: Node.js LTS chạy trên Ubuntu (Debian-based)
FROM node:18-alpine

# 2. Thiết lập thư mục làm việc trong container
WORKDIR /app

# 3. Copy package info trước để tối ưu cache layer Docker
COPY package*.json ./

# 4. Cài đặt dependencies (dành cho production)
RUN npm install

# 5. Copy phần còn lại (bao gồm .next, public, v.v...)
COPY . .

RUN npm run build

# 6. Mở port (nếu bạn chạy mặc định trên port 3000)
EXPOSE 3000

# 7. Lệnh khởi động
CMD ["npm", "start"]
