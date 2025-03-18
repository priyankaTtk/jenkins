// eslint.config.js

export default [
    {
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        globals: {
          // Define any global variables you need here
          console: "readonly", // Example: console is read-only
        },
      },
      rules: {
        'no-console': 'warn', // Warn on console statements
        'indent': ['error', 2], // Enforce 2-space indentation
        'quotes': ['error', 'single'], // Enforce single quotes
        'semi': ['error', 'always'], // Enforce semicolons
      },
    },
  ];