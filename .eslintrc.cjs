module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
};
