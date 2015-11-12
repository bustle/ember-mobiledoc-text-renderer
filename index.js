/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-mobiledoc-text-renderer',
  included: function() {
    var libRoot = require.resolve('mobiledoc-text-renderer/lib');
    var libPath = path.dirname(libRoot);

    this.treePaths.addon = libPath;
  }
};
