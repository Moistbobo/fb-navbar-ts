module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [
      2,
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'import/extensions': 0,
    camelcase: 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'no-param-reassign': 0,
    'react/button-has-type': 0,
    'no-console': 0,
    'func-names': 0,
    'no-alert': 0,
    'no-underscore-dangle': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/prop-types': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.d.ts'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
