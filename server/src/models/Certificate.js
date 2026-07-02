import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    issuer: { type: String, default: '' },
    issuedAt: { type: Date, default: Date.now },
    image: { type: String, default: '' }
  },
  { timestamps: true }
);

export default mongoose.model('Certificate', certificateSchema);
