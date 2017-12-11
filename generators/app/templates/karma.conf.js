module.exports = function (config) {
  config.set({
    basePath: '',
    logLevel: config.LOG_INFO,
    reporters: ['progress'],
    autoWatch: false,
    singleRun: true,
    colors: true,

    browsers: ['PhantomJS'],

    frameworks: ['jasmine'],

    files: [
      {
        pattern: 'tests/**/*.js',
        watched: false,
      },
      {
        pattern: 'tests/**/*.jsx',
        watched: false,
      },
    ],

    preprocessors: {
      'tests/**/*.js': ['webpack', 'sourcemap'],
      'tests/**/*.jsx': ['webpack', 'sourcemap'],
      'src/**/*.js': ['webpack', 'sourcemap'],
      'src/**/*.jsx': ['webpack', 'sourcemap']
    },

    webpack: require('./webpack.config'),

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-phantomjs-launcher'
    ],

    webpackMiddleware: {
      stats: 'errors-only'
    },
  });
};
