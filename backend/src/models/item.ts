import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  condition: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model('Item', ItemSchema);
