const path = require('path');

module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: path.resolve(__dirname, 'src/__tests__/setup.ts'),
  testPathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/setup.ts',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  testMatch: ['**/__tests__/*.(ts|tsx|js)'],
  mapCoverage: true,
};
