const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://priyadarshanghoshhazra908:jwORNeNREfG7nR90@cluster0.xf1je9v.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connection successful');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;
