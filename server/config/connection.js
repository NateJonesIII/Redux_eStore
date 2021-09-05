//Dependencies 
const mongoose = require('mongoose');
//Add to Atlas and connect to cloud DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/redux_eStore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
