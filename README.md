
[![TypeScript version][ts-badge]][typescript-4-0]
[![Node.js version][nodejs-badge]][nodejs]

# Document Generator

Test task to show approach how to generate several types of documents in nodejs environment using TypeScript and PDFKit library

### Clone repository

To clone the repository use the following commands:

```sh
git clone git@bitbucket.org:fomazov/document-generator.git

cd document-generator
npm install
```

##  Scripts to run

- `build` - transpile TypeScript to ES,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,

##  How to run

```sh
`npm run-script build` - transpile TypeScript to ES

`node build/src/app.js confirmation` - generate confirmation pdf document
`node build/src/app.js invoice` - stub for futher creation other types of pdf documents

```

##  Where I can find output documents?

All generated documents stored in ./public/documents/ directory

[ts-badge]: https://img.shields.io/badge/TypeScript-4.0-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2012.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v12.x/docs/api/
[typescript-4-0]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html

