
module.exports = {
  root:true,
  env: {
    'browser': true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    fix: true,
  },
  // eslint-disable-next-line no-console
  rules: {
    'indent': ['error', 2,],
    'linebreak-style': ['error', 'unix',],
    'quotes': ['error', 'single',],
    'semi': ['error', 'always',],
    //'comma-dangle': ['error', 'never',],
    'no-cond-assign': ['error', 'always',],
    'no-console': 'off',
  },
  'extends': ['plugin:vue/recommended',]

};
