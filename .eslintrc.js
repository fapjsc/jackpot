module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'spaced-comment': 'off',
    'no-console': 'warn',
    'consistent-return': 'off',
    'no-param-reassign': 'off', // 不能直接改參數s

    // 'func-names': 'off',
    // 'object-shorthand': 'off',    // object 強制使用簡寫
    // 'no-process-exit': 'off',
    // 'no-return-await': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    // 'no-unused-vars': ['error', { argsIgnorePattern: 'req|res|next|val' }], // 消除未使用的變量
  },
};
