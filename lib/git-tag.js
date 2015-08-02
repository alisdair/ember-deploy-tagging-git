/* jshint node: true */

var CoreObject = require('core-object');
var gitRepoInfo = require('git-repo-info');
var path = require('path');

function findVersion() {
  var info = gitRepoInfo();
  var base = info.tag || findPackageVersion();
  var sha = info.sha.slice(0, 8);

  return base + '+' + sha;
}

function findPackageVersion() {
  return require(path.join(process.cwd(), 'package.json')).version;
}

module.exports = CoreObject.extend({
  init: function() {
    this.version = this.version || findVersion();
  },

  createTag: function() {
    if (typeof this.version === 'undefined' || this.version.length === 0) {
      throw new Error('Could not determine git repo version');
    }

    return this.manifest + ':' + this.version;
  }
});
