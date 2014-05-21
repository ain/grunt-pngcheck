# grunt-pngcheck [![NPM version](http://img.shields.io/npm/v/grunt-pngcheck.svg)](https://www.npmjs.org/package/grunt-pngcheck)

> Test PNG files against corruption.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pngcheck --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pngcheck');
```

## The "pngcheck" task

### Overview

`pngcheck` task checks against corrupt PNG files:
- without IEND marker, e.g. those broken by a partial download
- having trailing bytes post IEND marker, e.g. modified by a virus, script etc.

In your project's Gruntfile, add a section named `pngcheck` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  pngcheck: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Usage Example

```js
grunt.initConfig({
  pngcheck: {
    files: {
      src: ['src/images/layout/{,**/}*.png', 'src/images/style/*.png'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
See [release tags](https://github.com/ain/grunt-pngcheck/releases).

## License
Copyright (c) 2014 Ain Tohvri. Licensed under the GPL license.
