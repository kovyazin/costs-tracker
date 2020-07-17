const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        aliases: {
          '@': './src',
          '@features': './src/features',
          '@lib': './src/lib',
          '@api': './src/api',
          '@ui': './src/ui',
          '@pages': './src/pages'
        }
      }
    }
  ]
}