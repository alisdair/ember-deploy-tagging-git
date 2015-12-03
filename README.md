# ember-deploy-tagging-git

[![Build Status](https://travis-ci.org/alisdair/ember-deploy-tagging-git.svg)](https://travis-ci.org/alisdair/ember-deploy-tagging-git) [![](https://ember-cli-deploy.github.io/ember-cli-deploy-version-badges/plugins/ember-deploy-tagging-git.svg)](http://ember-cli-deploy.github.io/ember-cli-deploy-version-badges/)

## DEPRECATED

This addon is deprecated as it is incompatible with ember-cli-deploy 0.5.0+. I've contributed equivalent functionality to [ember-cli-deploy-revision-data](https://github.com/ember-cli-deploy/ember-cli-deploy-revision-data), which is maintained by the core team. Use that instead!

---

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
        store: { type: 'redis' }, // etc.
        assets: { type: 's3' }, // etc.
        tagging: 'git-tag'
      }
    };
    ```

## Developing the addon

- `npm install`
- `npm test`
