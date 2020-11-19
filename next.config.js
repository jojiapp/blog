const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://jojiapp.github.io/blog"
      : "",
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
