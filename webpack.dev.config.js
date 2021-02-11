const { createConfig } = require('@edx/frontend-build');
// eslint-disable-next-line import/no-extraneous-dependencies
const { ModuleFederationPlugin } = require('webpack').container;

const deps = require('./package.json').dependencies;

module.exports = createConfig('webpack-dev', {
  output: {
    publicPath: 'auto', // Necessary to get remote script loading working.  Maybe something tod o witho our dev.publicPath stuff below?
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'plugin',
      filename: 'remoteEntry.js',
      exposes: {
        './Announcement': './src/ui/learner/Announcement',
      },
      shared: {
        react: {
          requiredVersion: deps.react,
          import: 'react', // the "react" package will be used a provided and fallback module
          shareKey: 'react', // under this name the shared module will be placed in the share scope
          shareScope: 'default', // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
        },
        'react-dom': {
          requiredVersion: deps['react-dom'],
          singleton: true, // only a single version of the shared module is allowed
        },
        '@edx/frontend-platform': {
          requiredVersion: deps['@edx/frontend-platform'],
          singleton: true,
        },
      },
    }),
  ],
});
