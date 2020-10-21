const fs = require('fs')
const path = require('path')

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  webpackFinal: async (config, { configType }) => {
      config.module.rules.push(
          {
              test: /\.less$/,
              use: [
                  {
                    loader: 'style-loader',
                  },
                  {
                    loader: 'css-loader',
                  },
                  {
                      loader: "less-loader",
                      options: {
                        lessOptions: {
                          javascriptEnabled: true
                        },
                      }
                  }
              ]
          },
      );
      config.module.rules.push(
        {
            test: /\.scss$/,
            use: [
                  {
                    loader: 'style-loader',
                  },
                  {
                    loader: 'css-loader',
                  },
                  {
                    loader: "sass-loader",
                  }
                ]
            },
        );
      return config;
  },
};