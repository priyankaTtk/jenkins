// eslint.config.js

export default [
    {
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        globals: {
<<<<<<< HEAD
=======
          // Define any global variables you need here
>>>>>>> ceb1a51 (changed)
          console: "readonly", // Example: console is read-only
        },
      },
      rules: {
<<<<<<< HEAD
        'no-console': 'off', // Disable the rule for console statements
        'indent': 'off', // Disable indentation rule
        'quotes': 'off', // Disable quotes rule
=======
        'no-console': 'warn', // Warn on console statements
        'indent': ['error', 2], // Enforce 2-space indentation
        'quotes': ['error', 'single'], // Enforce single quotes
>>>>>>> ceb1a51 (changed)
        'semi': ['error', 'always'], // Enforce semicolons
      },
    },
  ];