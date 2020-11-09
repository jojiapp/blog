const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            esModule: false,
          },
        },
      ],
    });
    return config;
  },
});
