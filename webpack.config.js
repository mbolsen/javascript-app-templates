const path = require('path');

const SRC_DIR = path.join(__dirname, '/frontend/src');
const DIST_DIR = path.join(__dirname, '/frontend/dist');

module.exports = {

  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(png|jpe?g|gig)$/i, loader: 'file-loader',
      },
    ],
  },
};
