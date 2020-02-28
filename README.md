# dc-pattern-lib

[![Build Status](https://travis-ci.org/megumiteam/dc-pattern-lib-v2.svg?branch=master)](https://travis-ci.org/megumiteam/dc-pattern-lib-v2)
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/dc-pattern-lib.png?style=flat-square
[npm]: https://www.npmjs.org/package/dc-pattern-lib
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

## Getting started

```bash
$ git clone git@github.com:megumiteam/dc-pattern-lib-v2.git
$ cd dc-pattern-lib-v2
$ npm install
$ npm start
```

## Browser check

`npm start` will be start to run two local server.

### URL: http://localhost:3000/

It is a demo site to use the package.
All source code are in `demo/src` directory.

And we can start the server by the following command.

```bash
# start all dev server
$ npm start

# start the demo server
$ npm run start-nwb
```

### URL: http://localhost:6006/

It is a component catalog made by a Storybook.
All source code are in `stories/` directory.

And we can start the server by the following command.

```
# start all dev server
$ npm start

# start the demo server
$ npm run storybook
```

## Contributing

```
$ git checkout -b YOUR_TOPIC_BRANCH

# edit some code
...

# Lint
$ npm run lint

# Test
$ npm test

# Push your branch
$ git push origin YOUR_TOPIC_BRANCH

# Then, you can make a Pull Request
```

## Publish

We publish it from Travis CI.
You should run the following command after merge your TOPIC BRANCH into the master branch.

```bash
$ git checkout master
$ git pull origin master
# Tag it ( https://semver.org/ )
$ npm version {major | minor | patch}
```

After run `npm version`, the `npm run postversion` will run to push the tag into GitHub.
And Travis CI will start to build and publish it when you push a tagged branch.
