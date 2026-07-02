import mongoose from 'mongoose';

const roadmapSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true },
    steps: [{ type: String }],
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model('Roadmap', roadmapSchema);
