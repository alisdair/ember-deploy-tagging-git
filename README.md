# ember-deploy-tagging-git

[![Build Status](https://travis-ci.org/alisdair/ember-deploy-tagging-git.svg)](https://travis-ci.org/alisdair/ember-deploy-tagging-git)

Uses [git-repo-version][git-repo-version] to tag Ember deploy releases. For example, `1.0.5+165832f5`.

This makes the output of `ember deploy:list` much more undertandable than a list of SHA prefixes.

[git-repo-version]: https://github.com/cibernox/git-repo-version

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
