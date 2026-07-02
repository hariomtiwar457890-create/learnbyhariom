import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    caption: { type: String, default: '' },
    category: { type: String, default: 'General' }
  },
  { timestamps: true }
);

export default mongoose.model('Gallery', gallerySchema);
