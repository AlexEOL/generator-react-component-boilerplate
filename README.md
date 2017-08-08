# generator-react-component-boilerplate [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> biolerplate for react components

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-component-boilerplate using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-component-boilerplate
```

Then generate your new project:

```bash
yo react-component-boilerplate
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).
 
## How to develop your component

### Source

Your component source code is in src. You can use JSX and ES6 syntax freely in your component source; it will be transpiled to lib with Babel before being published to npm so that your users will simply be able to include it.

It's a great idea to add a description, documentation and other information to your README.md file, to help people who are interested in using your component.

### Example & Preview

Preview your component with LiveReload:

```bash
npm run dev
```

A webserver will be started on [localhost:8000](http://localhost:8000) running the examples in `example/src`.

You can use this playpen to test your component, and then publish it as live examples to GitHub Pages, which is a great way to let potential users try out your component and see what it can do.

### Build and Publish

```bash
npm run build
```

## Feedback?

Open an issue, submit a PR or write on my email (Alexander.Melnik90@yandex.ru).

## License

 [MIT License](http://en.wikipedia.org/wiki/MIT_License). Copyright © 2016 AlexEOL


[npm-image]: https://badge.fury.io/js/generator-react-component-boilerplate.svg
[npm-url]: https://npmjs.org/package/generator-react-component-boilerplate
[travis-image]: https://travis-ci.org/AlexEOL/generator-react-component-boilerplate.svg?branch=master
[travis-url]: https://travis-ci.org/AlexEOL/generator-react-component-boilerplate
[daviddm-image]: https://david-dm.org/AlexEOL/generator-react-component-boilerplate.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/AlexEOL/generator-react-component-boilerplate
