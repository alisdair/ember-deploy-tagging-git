/* jshint node: true */
'use strict';

var GitTag = require('./lib/git-tag');

module.exports = {
  name: 'ember-deploy-tagging-git',
  type: 'ember-deploy-addon',

  adapters: {
    tagging: {
      'git-tag': GitTag
    }
  }
};
