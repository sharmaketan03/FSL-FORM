import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadPath = './upload';
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Export upload.fields for multiple images
export default upload.fields([
  { name: 'imageFront', maxCount: 1 },
  { name: 'imageBack', maxCount: 1 }
]);
