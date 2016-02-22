module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    frameworks: ['jasmine', 'browserify'],

    files: [
      'app/**/*.spec.js'
    ],

    preprocessors: {
      'app/**/*.spec.js': ['browserify']
    },

    //browserNoActivityTimeout: 200000,

    // If browser does not capture in given timeout [ms], kill it
    //captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    browserify: {
      debug: true,
      transform: ['browserify-shim']
    },

    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],

    // web server port
    //port: 9876,

    // cli runner port
    //runnerPort: 9100,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // Start these browsers (see package.json to check what launchers are installed):
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS']
  });
};
