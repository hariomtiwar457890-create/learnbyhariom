import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('file'), (_req, res) => {
  res.json({ success: true, message: 'Upload endpoint ready', fileName: _req.file?.originalname || 'unknown' });
});

export default router;
