const webpack = require('webpack');

module.exports = {
  entry: {
    main:'./src/js/main/index.js'
  },
  devtool: 'inline-source-map',
  output: {
    path: __dirname+'/dist/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  devServer: {
    contentBase: './dist',
    port: 3535,
    
  },
  module: {
    rules:[
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader', 
        options: {
          presets: [
            ['env', {'modules': false}]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options:{
              modules:true,
              namedExport:true,
              camelCase:true,
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options:{
              modules:true,
              namedExport:true,
              camelCase:true,
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.bmp$/i,
        use: [
          {
            loader: 'url-loader',
            options: {}  
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}