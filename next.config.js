/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  pageExtensions: ['page.tsx'],
  webpack: (config, { webpack }) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.join(__dirname, 'src'),
    };

    return config;
  },
};
