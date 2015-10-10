/**
 * grunt-pngcheck
 * https://github.com/ain/grunt-pngcheck
 *
 * Copyright (c) 2014 Ain Tohvri
 * Licensed under the GPL license.
 */

'use strict';

module.exports = function (grunt) {

  var pngcheck = require('./lib/pngcheck.js');

  grunt.registerMultiTask('pngcheck', 'Test PNG files against corruption.', function () {
    var options = this.options({
      punctuation: '. !!!',
      separator: ',: '
    });

    pngcheck.validate(this.files, options, function(results, done) {
      grunt.log.ok('Validation complete.');
    });
  });
};