const eslint = require("@eslint/js"),
  tslint = require("typescript-eslint"),
  { defineConfig } = require("eslint/config");

const tslintConfigList = tslint.configs.recommended;
tslintConfigList[0].languageOptions.sourceType = "commonjs";
tslintConfigList[2].rules["@typescript-eslint/no-require-imports"] = "off";

module.exports = defineConfig(eslint.configs.recommended, tslintConfigList);
