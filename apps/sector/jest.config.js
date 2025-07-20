module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(@shopify/react-native-skia|react-native)/)'
  ],
};
