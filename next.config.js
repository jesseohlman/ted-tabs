const path = require("path");
const withImages = require("next-images");

module.exports = withImages({
  basePath: "/ted-tabs",
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "src/components"),
    };
    return config;
  },
});
