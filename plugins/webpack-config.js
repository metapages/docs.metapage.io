const webpack = require('webpack');
const path = require('path');

module.exports = function (context, options) {
  return {
    name: 'webpack-config-plugin',
    configureWebpack(config, isServer) {
      const emptyModulePath = path.resolve(context.siteDir, 'plugins', 'empty-module.js');
      
      return {
        plugins: [
          // Ignore https:// and http:// URLs in module resolution
          new webpack.NormalModuleReplacementPlugin(
            /^https?:\/\//,
            (resource) => {
              // Replace with an empty module to prevent webpack from trying to load it
              resource.request = emptyModulePath;
            }
          ),
        ],
      };
    },
  };
};

