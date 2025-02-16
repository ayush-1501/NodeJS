// GLOBALS  - NO WINDOW !!!!

// __dirname - Path to the current directory
console.log('__dirname:', __dirname);

// __filename - Full path to the current file
console.log('__filename:', __filename);

// require - Function to import modules (CommonJS)
const fs = require('fs');

// Use fs to read the contents of the current directory
fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
  } else {
    console.log('Files in the current directory:', files);
  }
});

// module - Info about the current module (file)
console.log('module:', module);

// process - Info about the environment where the program is running
console.log('process.env:', process.env); // Environment variables

// Display process.argv to see command-line arguments
console.log('process.argv:', process.argv);

// Display the current working directory
console.log('process.cwd():', process.cwd());

// Set an interval to log a message every second
setInterval(() => {
  console.log('hello world');
}, 1000);

// Handling uncaught exceptions
process.on('uncaughtException', (err, origin) => {
  console.log(`Caught exception: ${err}\nException origin: ${origin}`);
});

// Handling exit event
process.on('exit', (code) => {
  console.log(`Process is exiting with code: ${code}`);
  // Perform cleanup if necessary here
  // It's important to note that you cannot perform async tasks here
});
