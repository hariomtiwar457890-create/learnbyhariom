import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json({
      success: true,
      data: message,
    });
  } catch (error) {
    next(error);
  }
});

export default router;