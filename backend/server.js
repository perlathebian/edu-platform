// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db'); // Import the database connection
const helmet = require('helmet');
const codeRunner = require('./codeRunner');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
// Use the codeRunner router for code execution
app.use('/api', codeRunner);
app.use('/api/auth', authRoutes);

// Import Routes
const quizRoutes = require('./routes/quizRoutes');

// Root Route
app.get('/', (req, res) => {
  res.send('Backend Server is Running');
});

// Test Database Connection
app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS solution');
    res.json({
      message: 'Database connection successful',
      solution: rows[0].solution
    });
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({ message: 'Database connection failed', error });
  }
});

// Use Quiz Routes
app.use('/api', quizRoutes); 

// 404 Route
app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' });
  });
  
  // Error Handling Middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
