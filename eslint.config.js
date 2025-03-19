// eslint.config.js

export default [
    {
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        globals: {
          console: "readonly", // Example: console is read-only
        },
      },
      rules: {
        'no-console': 'off', // Disable the rule for console statements
        'indent': 'off', // Disable indentation rule
        'quotes': 'off', // Disable quotes rule
        'semi': ['error', 'always'], // Enforce semicolons
      },
    },
  ];