/* config-overrides.js */
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const path = require('path');

const { override, useEslintRc, addWebpackAlias } = require('customize-cra');
const { paths } = require('react-app-rewired');

let aliases = {
  '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
  'react-dom': '@hot-loader/react-dom'
};

if (process.env.NODE_ENV === 'production') {
  aliases = {
    ...aliases,
    react: 'preact-compat',
    'react-dom': 'preact-compat'
  };
}

const hotLoader = _ => config => {
  config = rewireReactHotLoader(config, process.env);
  return config;
};

module.exports = override(hotLoader(), useEslintRc(), addWebpackAlias(aliases));
