const path = require('path')

// The folders containing files importing twin.macro
const includedDirs = [path.resolve(__dirname, 'src')]

module.exports = function withTwin(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      const { dev, isServer } = options
      // eslint-disable-next-line no-param-reassign
      config.module = config.module || {}
      // eslint-disable-next-line no-param-reassign
      config.module.rules = config.module.rules || []

      const patchedDefaultLoaders = options.defaultLoaders.babel
      patchedDefaultLoaders.options.hasServerComponents = false
      patchedDefaultLoaders.options.hasReactRefresh = false

      config.module.rules.push({
        test: /\.(tsx|ts)$/,
        include: includedDirs,
        use: [
          patchedDefaultLoaders,
          {
            loader: 'babel-loader',
            options: {
              sourceMaps: dev,
              plugins: [
                require.resolve('babel-plugin-macros'),
                [
                  require.resolve('babel-plugin-styled-components'),
                  { ssr: true, displayName: true },
                ],
                [
                  require.resolve('@babel/plugin-syntax-typescript'),
                  { isTSX: true },
                ],
              ],
            },
          },
        ],
      })

      if (!isServer) {
        // eslint-disable-next-line no-param-reassign
        config.resolve.fallback = {
          ...(config.resolve.fallback || {}),
          fs: false,
          module: false,
          path: false,
          os: false,
          crypto: false,
        }
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }
      return config
    },
  }
}
