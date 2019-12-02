import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: { type: String, required: true },
  expires: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default model('Pool', schema);
