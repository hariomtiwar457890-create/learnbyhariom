import express from 'express';
import Note from '../models/Note.js';

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json({ success: true, data: notes });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json({ success: true, data: note });
  } catch (error) {
    next(error);
  }
});

export default router;
