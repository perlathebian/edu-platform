// backend/middleware/roleMiddleware.js

const db = require('../config/db');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'my_very_secure_secret';

const requireTeacherRole = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    console.log("No token found");
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("Decoded Token:", decoded);
    const [user] = await db.query('SELECT role FROM users WHERE user_id = ?', [decoded.userId]);

    if (!user || user[0].role !== 'teacher') {
      return res.status(403).json({ message: 'Access denied' });
    }

    next();
  } catch (error) {
    console.error("Error in Token Verification:", error);  
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = requireTeacherRole;
