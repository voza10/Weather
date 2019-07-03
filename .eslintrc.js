module.exports = {
  env: {
    es6: true,
    "react-native/react-native": true
  },
  parser: "babel-eslint",
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
    'react-hooks'
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "react/jsx-curly-brace-presence": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-one-expression-per-line": 0,
    "implicit-arrow-linebreak": 0,
    "arrow-parens": 0,
    "no-trailing-spaces": 0,
    "no-use-before-define": 0,
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-wrap-multilines": 0,
    "operator-linebreak": 0,
    "comma-dangle": 0,
    "no-console": 0,
    "no-plusplus": 0,
    "prefer-template": 0,
    "array-callback-return": 0,
    "no-param-reassign": 0,
    "no-nested-ternary": 0,
    "global-require": 0,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1
  },
};
