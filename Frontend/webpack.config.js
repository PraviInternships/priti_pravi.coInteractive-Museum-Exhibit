const path = require('path');

module.exports = {
  entry: {
    main: './src/index.jsx',
    // vendor: './src/vendor.js', // Example of another entry point
  },
    output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].bundle.js', // Use [name] to differentiate chunks
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  
  performance: {
    hints: 'warning', // Warn if bundle size exceeds a certain threshold
    maxAssetSize: 1000000, // Set asset size limit to 1MB
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3001,
  },
};

