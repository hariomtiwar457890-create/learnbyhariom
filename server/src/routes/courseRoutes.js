import express from 'express';
import Course from '../models/Course.js';

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json({ success: true, data: courses });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json({ success: true, data: course });
  } catch (error) {
    next(error);
  }
});

export default router;
