import express from 'express';
import Gallery from '../models/Gallery.js';

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const items = await Gallery.find().sort({ createdAt: -1 });
    res.json({ success: true, data: items });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const item = await Gallery.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (error) {
    next(error);
  }
});

export default router;
