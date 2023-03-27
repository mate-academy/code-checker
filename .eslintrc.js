const path = require('path');

const resolve = {
  extensions: ['.js', '.ts'],
  alias: {
    '@': path.resolve(__dirname, '.'),
  },
};

module.exports = {
  extends: [
    '@mate-academy/eslint-config-internal',
  ],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    camelcase: 'off',
  },
  ignorePatterns: [
    '**/node_modules/*',
    '**/dist/*',
  ],
  settings: {
    'import/resolver': {
      alias: {
        extensions: resolve.extensions,
        map: [
          ...Object.entries(resolve.alias),
        ],
      },
      node: {
        extensions: resolve.extensions,
      },
    },
  },
};
