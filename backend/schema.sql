-- backend/schema.sql

-- Create the questions table
CREATE TABLE questions (
  id INT NOT NULL AUTO_INCREMENT,
  topic VARCHAR(255),
  question_text TEXT,
  PRIMARY KEY (id)
);


-- Create the answers table
CREATE TABLE answers (
  id INT NOT NULL AUTO_INCREMENT,
  question_id INT,
  answer_text TEXT,
  is_correct TINYINT(1),
  PRIMARY KEY (id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);


-- Create the users table
CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id)
);

-- Create the user quiz attempts table
CREATE TABLE user_quiz_attempts (
  attempt_id INT NOT NULL AUTO_INCREMENT,
  user_id INT,
  question_id INT,
  selected_answer_id INT,
  attempt_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (attempt_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
