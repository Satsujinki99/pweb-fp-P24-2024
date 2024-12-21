import mongoose from 'mongoose';

const OperatorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export default mongoose.model('Operator', OperatorSchema);
