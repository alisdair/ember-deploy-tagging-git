// jshint node: true
var expect = require('chai').expect;
var GitTaggingAdapter = require('../../../lib/git-tag');

describe('git-tag', function() {
  describe('#createTag', function() {
    it('concatenates manifest and version', function(){
      var subject = new GitTaggingAdapter({
        manifest: 'manifest',
        version: 'version'
      });

      expect(subject.createTag()).to.equal('manifest:version');
    });

    it('determines version using git-repo-version', function(){
      var version = require('git-repo-version');
      var subject = new GitTaggingAdapter({
        manifest: 'manifest',
        version: version
      });

      expect(subject.createTag()).to.equal('manifest:' + version);
    });

    it('creates tag with a useful format', function(){
      var subject = new GitTaggingAdapter({
        manifest: 'manifest',
      });

      // Format: manifest, version in form 1.2.3, "+", 8 chars of git hash
      var format = /^manifest:\d+\.\d+\.\d+\+[0-9a-f]{8}$/;
      expect(subject.createTag()).to.match(format);
    });
  });
});
