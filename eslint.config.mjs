module.exports = {
  env: {
      browser: true,
      es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
  },
  rules: {
      'no-console': 'warn', // Warn on console logs
      'indent': ['error', 4], // 4 spaces for indentation
      'quotes': ['error', 'single'], // Use single quotes
      'semi': ['error', 'always'], // Require semicolons
  },
};