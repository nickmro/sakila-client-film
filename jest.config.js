module.exports = {
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  moduleNameMapper: {
    '^~(.*)': '<rootDir>/src/$1',
  }
}