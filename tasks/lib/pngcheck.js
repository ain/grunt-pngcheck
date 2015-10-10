'use strict';

var PNG = require('png-js');
var fs = require('fs');

exports.validate = function(files, options, done) {
  files.forEach(function (file) {
    var src = file.src.filter(function (filepath) {
      if (!grunt.file.exists(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.');
        return false;
      }
      else {
        return true;
      }
    }).map(function (filepath) {
      try {
        grunt.log.debug('Loading', filepath);
        var png = PNG.load(filepath);
        var iend = png.pos + 4;
        var total = png.data.length;
        if (iend < total) {
          grunt.fail.fatal('Invalid trailing bytes (' + (total - iend) + ') detected: ' + filepath);
        }
        grunt.log.ok(filepath);
      }
      catch (error) {
        grunt.fail.fatal(error.message + ': ' + filepath);
      }
    });
    grunt.log.ok('Check successful: no PNGs corrupt.');
  });

  return exports;
};