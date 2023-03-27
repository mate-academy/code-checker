module.exports = {
  extends: [
    '@mate-academy/eslint-config-internal',
  ],
  plugins: [
    'file-extension-in-import-ts',
  ],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    camelcase: 'off',
    'file-extension-in-import-ts/file-extension-in-import-ts': 'error',
    'import/no-unresolved': ['error', { ignore: ['\\.js$'] }],
  },
  ignorePatterns: [
    '**/node_modules/*',
    '**/dist/*',
  ],

};
