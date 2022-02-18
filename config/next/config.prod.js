const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (nextConfig = {}, { nextComposePlugins, phase }) => ({
  ...nextConfig,

  webpack: (config, options) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "sass-loader",
            options: {
              data: "$env: " + process.env.NEXT_PUBLIC_WEBSITE_NAME + ";",
            },
          },
        ],
      },
    ];

    config.plugins = [
      ...config.plugins,
      new MiniCssExtractPlugin({
        filename: "static/[name].[hash].css",
        chunkFilename: "static/[id].[hash].css",
      }),
    ];

    return typeof nextConfig.webpack === "function"
      ? nextConfig.webpack(config, options)
      : config;
  },
});
