export const stylelintConfig = {
  extends: 'stylelint-config-equinusocio',
  ignoreFiles: ['!**/*.css', '**/*.jsx', '**/*.tsx', '**/*.ts', 'node_modules'],
  plugins: ['stylelint-design-tokens-plugin'],
  rules: {
    'designtokens/check': [
      true,
      './node_modules/@wonderflow/tokens/platforms/web/tokens.json'
    ]
  }
}
