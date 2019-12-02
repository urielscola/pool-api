import mongoose from 'mongoose';

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB successfully connected.');
  } catch (err) {
    console.log('MongoDB connection error: ', err);
  }
};
