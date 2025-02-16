// Importing required modules
const os = require('os'); // Built-in module to get system info
const fs = require('fs'); // Built-in module to read/write files

// Function to categorize number
const categorizeNumber = (num) => {
  return num < 10 ? 'small number' : 'large number';
};

// Function to get system info
const getSystemInfo = () => {
  return {
    platform: os.platform(),
    cpuCores: os.cpus().length,
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
  };
};

// Function to read a file
const readFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data;
  } catch (err) {
    return 'Error reading file: ' + err.message;
  }
};

// Function to greet user
const greet = (name) => {
  console.log(`Hello, ${name}! Welcome to Node.js.`);
};

// Main Execution
const amount = 9;
console.log(categorizeNumber(amount));

console.log(`Hey, it's my first Node.js app!`);

console.log('System Info:', getSystemInfo());

greet('Ayush'); // Replace with your name

// Try reading a file (replace 'example.txt' with an actual file)
console.log('File Content:', readFile('example.txt'));
