

 module.exports = {
   entry: ['babel-polyfill', './client/app.js'],

   output: {
     filename: './client/bundle.js'
   },

   module: {
     loaders: [
       { test: /\.js?$/, loader: 'babel', }
     ]
   }
 };
