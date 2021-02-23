const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#38D996",
              "@link-color": "#38D996",
              "@border-radius-base": "4px",
              "@btn-height-base": "@height-base",
              "@input-placeholder-color": "hsv(0, 0, 75%)",
              "label-required-color": "@highlight-color",
              "@label-color": "@heading-color",
              "@gray-7": "#8c8c8c",
              "@font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Proxima Nova' "
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};