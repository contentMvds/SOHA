const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://mongo:27017/soha?authSource=admin');
    console.log('MongoDB connected!');
  } catch (error) {
    console.error('Connection error:', error.message);
  }
};

module.exports = connectDB;