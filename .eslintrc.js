module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: 'off',
    'no-console': 'off',
    'comma-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',

    // custom rules
    no_dangerous_function: 'error'
  },
};
