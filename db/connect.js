// Updated connection configuration
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
