module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],

  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'always-multiline',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        '**/src/**/*.test.(js|ts)'
      ],
      env: {
        jest: true,
      },
    }
  ],
}
