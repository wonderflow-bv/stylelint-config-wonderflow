# Wanda Shared Configurations [<img src="https://svgshare.com/i/Ygj.svg" alt="Wonderflow Logo" width="90" height="90" align="right">](https://design.wonderflow.ai)

This repository contains the source code of the Wanda design system shared configurations.

```sh
npm i @wonderflow/config
```

## Configurations

This package provides a set of predefined [Wanda's](https://design.wonderflow.ai) configurations which you can (and sometimes must) use in wonderflow projects.

### PostCSS

Import `postcssConfig` inside your local `postcss.config.js` file. You can [check the exported configuration here](https://github.com/wonderflow-bv/config/blob/main/src/postcss/config.ts#L19-L47).

```js
const { postcssConfig } = require("@wonderflow/config");
module.exports = postcssConfig;
```

### Stylelint

Import `stylelintConfig` inside your local `stylelint.config.js` file. You can [check the exported configuration here](https://github.com/wonderflow-bv/config/blob/main/src/stylelint/config.ts#L5-L94).

```js
const { stylelintConfig } = require("@wonderflow/config");
module.exports = stylelintConfig;
```

### Eslint

The eslint configuration is not a standard [sharable configuration](https://eslint.org/docs/developer-guide/shareable-configs), we just export our configuration and some improvements as js object from the `@wonderflow/config` package.

Import `eslintConfig` inside your local `.eslintrc.js` file. You can [check the exported configuration here](https://github.com/wonderflow-bv/config/blob/main/src/eslint/config.ts).

```js
const { eslintConfig } = require("@wonderflow/config");
module.exports = eslintConfig;
```

#### Typescript

To add eslint typescript support you can extend the configuration by adding [the parser and the plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).

```js
const { eslintConfig } = require("@wonderflow/config");

module.exports = {
  ...eslintConfig,
  parser: "@typescript-eslint/parser",
  plugins: [...eslintConfig.plugins, "@typescript-eslint"],
};
```

Then create a `tsconfig.eslint.json` at the project root that extends your typescript configuration:

```json
{
  "extends": "./tsconfig.json"
}
```
