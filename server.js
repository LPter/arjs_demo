const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const port = 8080; // Cổng mà máy chủ sẽ lắng nghe

// Áp dụng middleware CORS cho tất cả các route
app.use(cors());

// Đường dẫn đến thư mục chứa tệp HTML
const publicDirectoryPath = path.join(__dirname, 'public');

app.use(express.static(publicDirectoryPath));

// Định tuyến để phục vụ tệp HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server đang chạy trên cổng ${port}`);
});
