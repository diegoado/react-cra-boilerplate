/* config-overrides.js */
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireAliases = require('react-app-rewire-aliases');
const rewireEslint = require('react-app-rewire-eslint');
const path = require('path');

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

const override = (config, env) => {
  config = rewireEslint(config, env);
  config = rewireReactHotLoader(config, env);
  config = rewireAliases.aliasesOptions(aliases)(config, env);

  return config;
};

module.exports = override;
