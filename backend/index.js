const express = require('express');
const app = express();
const db = require('./db');
const productRoute = require('./routes/productRoute')
const morgan = require('morgan')
const cors = require('cors');
const file_upload = require('express-fileupload')


// Middleware
app.use(express.json());
app.use(morgan('dev'))
app.use(cors())
app.use(file_upload())

// Routes
app.use('/api', productRoute);

db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
    connection.release();
  }
})

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
