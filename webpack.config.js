const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Use the React refresh plugin in development mode
  if (env.mode === "development") {
    config.plugins.push(
      new ReactRefreshWebpackPlugin()
    );
  }

  // config.module.rules[1].oneOf.unshift({
  //   test: /\.svg$/,
  //   exclude: /node_modules/,
  //   use: [
  //     {
  //       loader: '@svgr/webpack',
  //       options: {
  //         svgoConfig: {
  //           plugins: [
  //             {
  //               name: 'removeViewBox',
  //               active: false,
  //             },
  //             {
  //               name: 'removeUnknownsAndDefaults',
  //               active: false,
  //             },
  //             {
  //               name: 'convertColors',
  //               active: false,
  //             },
  //             {
  //               name: 'inlineStyles',
  //               params: {
  //                 onlyMatchedOnce: false,
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     },
  //   ],
  // });

  return config;
};