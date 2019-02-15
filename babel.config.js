/* eslint-disable import/no-commonjs */

module.exports = function(api) {
  api.cache(true)
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
          node: true,
        },
      },
    ],
    '@babel/preset-flow',
  ]
  const plugins = ['@babel/plugin-proposal-class-properties']

  return {
    presets,
    plugins,
  }
}
