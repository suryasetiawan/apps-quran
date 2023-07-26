module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  plugins: [
    ['babel-plugin-inline-import', { extensions: ['.svg'] }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./app'],
        extensions: ['.js', '.ios.js', '.android.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './app',
          '@kernel': './app/kernel',
          '@store': './app/store',
          '@assets': './app/assets',
          '@screens': './app/screens',
          '@utils': './app/utils'
        }
      }
    ]
  ]
}
