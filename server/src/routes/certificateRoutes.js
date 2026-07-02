import express from 'express';
import Certificate from '../models/Certificate.js';

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const certificates = await Certificate.find().sort({ createdAt: -1 });
    res.json({ success: true, data: certificates });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const certificate = await Certificate.create(req.body);
    res.status(201).json({ success: true, data: certificate });
  } catch (error) {
    next(error);
  }
});

export default router;
