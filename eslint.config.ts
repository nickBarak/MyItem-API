const globals = require('globals'),
  eslint = require('@eslint/js'),
  tslint = require('typescript-eslint'),
  { defineConfig } = require('eslint/config');

const eslintConfig = {
    ...eslint.configs.recommended,
    rules: {
      ...eslint.configs.recommended.rules,
      'no-unused-vars': 'warn',
    },
  },
  tslintConfigList = [ ...tslint.configs.recommended ];

tslintConfigList[0].languageOptions = {
  ...tslintConfigList[0].languageOptions,
  sourceType: 'commonjs',
  globals: globals.node,
};
tslintConfigList[2].rules['@typescript-eslint/no-require-imports'] = 'off';
tslintConfigList[2].rules['@typescript-eslint/no-unused-vars'] = 'warn';

module.exports = defineConfig(eslintConfig, tslintConfigList);
