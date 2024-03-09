---

marp: true
title: Build npm package without bundler
theme: default
class: invert
transition: pivot
paginate: true
author: Keshav Mohta
Date: Mar 09, 2024
Place: React Play Meetup @sense 
footer: @xkeshav
---

<!-- markdownlint-disable-file MD001 MD041 MD025 MD022 MD033-->

<style>
footer {
 color: mediumseagreen;
 font-size: 0.75rem;
 font-style: italic;
}

footer::first-letter {
  color: #334455;
}
</style>

<style scoped>
section  {
   color: grey;
}
</style>

<!-- _backgroundColor: whitesmoke -->
<!--  _paginate: skip -->
<!-- _class: lead  -->

# Build npm package without bundler

> Sat, 09 Mar 2024 @ReactPlayIO meetup

---

# About me

# _Keshav Mohta_

## SDE 3 / _J.P. Morgan Chase & Co._

exploring web since 2009

> [xkeshav.com](https://www.xkeshav.com)

---

# Agenda

- npm overview
- pre-requisite
- Creation of _package.json_
- Verify before publish
- Test locally
- Demo
- Convert package into typescript
- Publish to npm registry
- npm tips and history
- JSR (A new javascript registry )

---

# npm overview

- initial release : 12 Jan 2010
- 1.3 million packages
- acquired by Microsoft in Mar 2017
- what `npm` stands for ?
<!--- https://github.com/npm/npm/commit/9c0b24898b782e2bf43073bb1d836bbe67b339b3 -->
- `npm list -g --depth=0`

---

# pre-requisite for npm package

- account in npm (use access token for faster execution), its free
- `node` and `typescript` installed globally.

  `npm i typescript -g`

- recommended to build scoped package

- `npm login`
- `npm whoami`

---

# creation of `package.json`

- `npm init --scope=@xkeshav`

#### package.json

```json
{
  "name": "@xkeshav/alphabet",
  "version": "1.0.0",
  "description": "a package which gives array of 26 letters of english alphabet in capital case",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["alphabet"],
  "author": "Keshav",
  "license": "MIT"
}
```

tip: use of `.npmignore`

---

# export your code

- write code in the file which is mentioned in `main`

### index.js

```js
export const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
```

---

# verify before publish

> `npm publish --dry-run`

---

# Test Locally --> `npm link`

in package folder run

> npm link

run below in project where we want to test

> npm link <pkg-name>

then use it

```js
import { alphabet } from '@xkeshav/alphabet';
```

to fix issues

> npm unlink <pkg-name>

---

# Test locally --> `npm pack`

in package folder run

> npm pack

this will generate tarball of package file _package-name-minor.major.patch.tgz_

go to your project where we want to test

> npm install /location/of/[package-name-minor.major.patch].tgz

this will add entry in _package.json_ as below

```json
"dependencies": {
    "@xkeshav/alphabet": "file:xkeshav-alphabet-1.0.0.tgz"
}
```

---

# convert package into typescript

> tsc -init

### _tsconfig.json_

```json
{
  "compilerOptions": {
    // ...
    "target": "es5",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./lib",
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

---

# changes in `package.json`

```json
{
  "main": "./lib/index.js",
  "types": "./lib/index.d.ts",
  "scripts": {
    "build": "npx tsc"
  },
  "files": ["./lib/**"],
  "dependencies": {
    "typescript": "^5.3.3"
  }
}
```

---

# publish the package

> npm publish --access=public

to update version sequentially

> npm version [minor|major|patch]

---

# npm package history

- in 2016, `left-pad` naming issue
- in 2018 `flatmap-stream` ( bitcoin stealing)
- in 2020 `is-promise` cause serverless package issue
- in 2022 `colours` ( print garbase in infinite loop)
- in Nov 2022 `node-ipc` ( delete Russia Ip files in support of Ukarain War)

# npm tips

to see all version of a package

> npm view <pkg> versions

to reach homepage of a package

> npm home <pkg>

Alternative of installing package you can use `npx` from v 5.2.0

> npx <package>

---

# JSR (JavaScript Registry )

> [JSR](https://jsr.io) by Deno

---

<!-- _backgroundColor: white -->
<!-- _class: lead  -->

# Thanks

![bg right 70%](./portfolio_qr.png)

## Q & A ?
