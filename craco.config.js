const { whenProd } = require('@craco/craco');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = () => {
  const analyzerMode = process.env.REACT_APP_INTERACTIVE_ANALYZE
    ? 'server'
    : 'json';

  return {
    webpack: {
      plugins: {
        add: [
          ...whenProd(() => [new BundleAnalyzerPlugin({ analyzerMode })], []),
        ],
      },
    },
  };
};
