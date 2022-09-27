/* eslint-disable semi */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          components: 'src/components',
          models: 'src/models',
          screens: 'src/screens',
          hooks: 'src/hooks',
          navigation: 'src/navigation',
          assets: 'src/assets',
          theme: 'src/theme',
          store: 'src/store',
          utils: 'src/utils',
        },
      },
    ],
  ],
}
