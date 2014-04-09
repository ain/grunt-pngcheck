/*
 * grunt-pngcheck
 * https://github.com/ain/grunt-pngcheck
 *
 * Copyright (c) 2014 Ain Tohvri
 * Licensed under the GPL license.
 */

'use strict';
var PNG = require('png-js');
var fs = require('fs');

module.exports = function (grunt) {

  grunt.registerMultiTask('pngcheck', 'Test PNG files against corruption.', function () {

    var options = this.options({
      punctuation: '. !!!',
      separator: ',: '
    });

    this.files.forEach(function (file) {
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
  });

};
