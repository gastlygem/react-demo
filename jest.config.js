const path = require('path');

module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: path.resolve(__dirname, 'src/__tests__/setup.js'),
  testPathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/setup.js',
  ]
};
