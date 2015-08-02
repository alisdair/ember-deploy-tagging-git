/* jshint node: true */

var CoreObject = require('core-object');

module.exports = CoreObject.extend({
  init: function() {
    this.version = this.version || require('git-repo-version')();
  },

  createTag: function() {
    if (typeof this.version === 'undefined' || this.version.length === 0) {
      throw new Error('Could not determine git repo version');
    }

    return this.manifest + ':' + this.version;
  }
});
