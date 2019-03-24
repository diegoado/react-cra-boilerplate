/* config-overrides.js */
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireAliases = require('react-app-rewire-aliases');
const path = require('path');

const { paths } = require('react-app-rewired');

const aliases = {
    '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
    'react-dom': '@hot-loader/react-dom'
};

const override = (config, env) => {
    config = rewireReactHotLoader(config, env)
    config = rewireAliases.aliasesOptions(aliases)(config, env);

    return config;
};

module.exports = override;
