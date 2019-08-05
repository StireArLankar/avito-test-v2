// next.config.js
const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const path = require('path')

require('dotenv').config()
const Dotenv = require('dotenv-webpack')

module.exports = withSass(withTypescript({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[name]__[local]___[hash:base64:5]",
  },
  target: 'serverless',

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    config.resolve.alias['Components'] = path.join(__dirname, 'components')
    config.resolve.alias['Src'] = path.join(__dirname)
    config.resolve.alias['Context'] = path.join(__dirname, 'context')
    config.resolve.alias['Hoc'] = path.join(__dirname, 'hoc')

    config.node = {
      fs: 'empty'
    }

    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config
  }
}))
