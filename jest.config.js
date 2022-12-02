module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  testMatch: ['**/*.test.ts'],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"]
};