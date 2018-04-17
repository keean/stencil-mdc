const sass = require('@stencil/sass');

exports.config = {
  plugins: [
    sass({includePaths: ['./node_modules']})
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
