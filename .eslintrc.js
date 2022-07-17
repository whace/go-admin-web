module.exports = {
  env: {
    // 识别 ES 的代码，使用 ECMAScript 2021 自动设置 ecmaVersion parser 为 12
    es2021: true,
    browser: true,
    node: true,
  },
  extends: 'eslint:recommended',
  plugins: [
    "react",
    // 使用 Prettier 的代码风格规则
    // 并用 Prettier 来自动修复代码
    'prettier',
  ],
  parserOptions: {
    sourceType: 'module',
    jsxPragma: 'React',
  },
  rules: {
    'max-len': ['error', { code: 80 }],
  },
};
