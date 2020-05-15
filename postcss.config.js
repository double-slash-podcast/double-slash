module.exports = {
  module: true,
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    require('postcss-mixins'),
    require('precss'),
    require(`postcss-preset-env`)({
      stage: 3,
      autoprefixer: {grid: true},
    }),
  ],
};
