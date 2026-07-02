import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema(
  {
    siteName: { type: String, default: 'Learn By Hariom' },
    contactEmail: { type: String, default: 'contact@learnbyhariom.com' },
    maintenanceMode: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model('Settings', settingsSchema);
