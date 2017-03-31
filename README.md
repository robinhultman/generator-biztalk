# generator-biztalk [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Generator for BizTalk projects

Setting up BizTalk source code projects is a repetitive and boring yet important task. This Yeoman generator sets up a basic BizTalk solution with this structure:

```
<integrationname>.sln
│   .gitignore
│   nuget.config    
│
└───Src
│   |
│   └───<integrationname>.btproj
│       |
│       └───Transforms
│       |
│       └───Schemas
│       |
│       └───Pipelines
│       |
│       └───Orchestrations
│   
└───Tests
│    |
│    └───TestData
│
└───Bindings
│
└───Build
│   <integrationname>.proj
```

The included .gitignore is the official Github gitignore for [Visual Studio](https://github.com/github/gitignore/blob/master/VisualStudio.gitignore) which included relevant ignores for BizTalk.

## Compatability
Works with:
- BizTalk Server 2013
- BizTalk Server 2013R2
- BizTalk Server 2016

## Installation
First, install [node.js and npm](https://nodejs.org/en/download/current/) (we assume you are running Windows since this is a BizTalk generator).
Install [Yeoman](http://yeoman.io) and generator-biztalk using [npm](https://www.npmjs.com/). In PowerShell run:

```bash
npm install -g yo
npm install -g generator-biztalk
```

Go to the folder where you want to create your BizTalk solution then generate your new project:

```bash
yo biztalk
```

## Updating
Update the generator by running:

```bash
npm update generator-biztalk -g 
```

## License

MIT © [Robin Hultman]()


[npm-image]: https://badge.fury.io/js/generator-biztalk.svg
[npm-url]: https://npmjs.org/package/generator-biztalk
[travis-image]: https://travis-ci.org/robinhultman/generator-biztalk.svg?branch=master
[travis-url]: https://travis-ci.org/robinhultman/generator-biztalk
[daviddm-image]: https://david-dm.org/robinhultman/generator-biztalk.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/robinhultman/generator-biztalk
[coveralls-image]: https://coveralls.io/repos/robinhultman/generator-biztalk/badge.svg
[coveralls-url]: https://coveralls.io/r/robinhultman/generator-biztalk
