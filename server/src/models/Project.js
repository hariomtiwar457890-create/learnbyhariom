import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true },
    image: { type: String, default: '' },
    link: { type: String, default: '' },
    tags: [{ type: String }],
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
