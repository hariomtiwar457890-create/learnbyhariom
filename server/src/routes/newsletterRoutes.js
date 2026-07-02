import express from 'express';
import Newsletter from '../models/Newsletter.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const newsletter = await Newsletter.create(req.body);
    res.status(201).json({ success: true, data: newsletter });
  } catch (error) {
    next(error);
  }
});

export default router;
