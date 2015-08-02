# ember-deploy-tagging-git

[![Build Status](https://travis-ci.org/alisdair/ember-deploy-tagging-git.svg)](https://travis-ci.org/alisdair/ember-deploy-tagging-git)

Uses [git-repo-info][git-repo-info] to tag Ember deploy releases with readable information, like `1.0.5+165832f5`.

The tag is `version+sha`, where version is either the git tag (if checked out) or the package.json version, and sha is the first 8 characters of the git commit hash.

Example usage:

- `git tag 2.1.3`
- `git checkout 2.1.3`
- `ember deploy`

This will deploy an app with the index tag set to something like `2.1.3+ddaa74d`.

[git-repo-info]: https://github.com/rwjblue/git-repo-info

## Installation

- Install with `ember install ember-deploy-tagging-git`
- Edit your `config/deploy.js` to configure the adapter:

    ```javascript

    // ...
    module.exports = {
      production: {
        store: { type: 'redis' },
        asserts: { type: 's3' },
        tagging: 'git-tag'
      }
    };
    ```

## Developing the addon

- `npm install`
- `npm test`
