const express = require('express');
const { exec } = require('child_process');
const router = express.Router();
const fs = require('fs'); // Import the file system module

// Function to extract the class name from Java code
const extractClassName = (code) => {
    const classMatch = code.match(/class\s+(\w+)/); // Regex to find the class name
    return classMatch ? classMatch[1] : 'Temp'; // Default to 'Temp' if no class name is found
  };

router.post('/execute-code', (req, res) => {
  const { code, language } = req.body;

  let command = '';

  // Determine the command based on the language
  if (language === 'python') {
    command = `docker run --rm python-runner python3 -c "${code.replace(/"/g, '\\"')}"`;
  } else if (language === 'java') {
    // Extract the class name from the Java code
    const className = extractClassName(code);
    const javaFileName = `${className}.java`;

    // Save Java code to a file with the extracted class name
    fs.writeFileSync(javaFileName, code);

    // Compile and run the Java code using Docker
    command = `docker run --rm -v ${process.cwd()}:/usr/src/app java-runner sh -c "javac ${javaFileName} && java ${className}"`;
  }

  exec(command, (error, stdout, stderr) => {
    if (error) {
      res.status(400).json({ error: stderr });
    } else {
      res.json({ result: stdout });
    }
  });
});

module.exports = router;
