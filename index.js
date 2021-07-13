module.exports = {
  extends: 'stylelint-config-equinusocio',
  plugins: ['stylelint-design-tokens-plugin'],
  rules: {
    'designtokens/check': [
      true,
      './node_modules/@wonderflow/tokens/platforms/web/tokens.json'
    ]
  }
}
