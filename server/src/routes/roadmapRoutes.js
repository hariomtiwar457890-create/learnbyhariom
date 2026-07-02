import express from 'express';
import Roadmap from '../models/Roadmap.js';

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const roadmaps = await Roadmap.find().sort({ createdAt: -1 });
    res.json({ success: true, data: roadmaps });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const roadmap = await Roadmap.create(req.body);
    res.status(201).json({ success: true, data: roadmap });
  } catch (error) {
    next(error);
  }
});

export default router;
