const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Secret key for JWT
const JWT_SECRET = 'my_very_secure_secret';

// User Sign-Up
const signup = async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
  
      // Insert user into the database
      await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
      
      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating user' });
    }
  };

// User Login
const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  
      // Check if user exists
      if (!user || user.length === 0) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Compare the entered password with the hashed password
      const isMatch = await bcrypt.compare(password, user[0].password);
  
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Generate and send a token (if using JWT or any session)
      const token = jwt.sign({ userId: user[0].user_id, email: user[0].email }, JWT_SECRET, { expiresIn: '1h' }); 
      console.log("Generated Token:", token); // Add this log

      res.json({ token, user: { username: user[0].username, email: user[0].email } });
    } catch (err) {
      console.error("Error in Login:", err); // Add this log to see the actual error
      res.status(500).json({ message: 'Error logging in', error: err });
    }
};


module.exports = {
  signup,
  login,
};
