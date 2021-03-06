// https://eslint.org/docs/user-guide/configuring

console.warn('🚫🚫🚫已移除eslint-plugin-flowtype, 如果需要请自己安装')

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6
  },
  env: {
    browser: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false
    }
  },
  // check if imports actually resolve
  // add your custom rules here
  globals: {
    self: true
  },
  rules: {
    semi: ['error', 'never'],
    'no-param-reassign': [0],
    'comma-dangle': ['error', 'never'],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['off'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': [0]
  }
}
