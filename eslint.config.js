// eslint.config.js

import globals from "globals";

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        // Add any other globals you need here
      }
    },
    rules: {
      'no-console': 'warn',
      'indent': ['error', 4],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
    }
  }
];