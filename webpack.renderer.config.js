const rules = require('./webpack.rules');
const CopyPlugin = require('copy-webpack-plugin');

rules.push({
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
});

rules.push({
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    "style-loader",
    // Translates CSS into CommonJS
    "css-loader",
    // Compiles Sass to CSS
    "sass-loader",
  ],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: [
    // Copy built assets from Ember app.
    new CopyPlugin({
      patterns: [
        {
          from: 'src/front/climber/dist/assets',
          to: './main_window/assets'
        }
      ],
    }),
  ]
};
