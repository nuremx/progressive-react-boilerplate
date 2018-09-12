# React Boilerplate

[![Dependency Status][daviddm-img]][daviddm-url]

Boilerplate to create a greatly optimized React PWA, managing state with Redux, and using a Express server making it ready to support other services.

## Features

- ⚛️ **React** `v16`
- 🔄 **React Router** `v4`
- 💠 **Express** server
- 〽️ **Babel `7`**
- 🔥 **React Hot Reload** with webpack-hot-middleware
- ⭕️ **PostCSS** with Sass-like syntax, auto-prefixer and modern css support
- ✂️ **Code splitting** for .js and .css
- 📱 **Progressive Web App** ready, service worker and manifest
- 📦 **Webpack** `v4`
- 👮 Basic security with **helmet** and **hpp**
- 🐳 **Docker** support

- 🌸 Easy to use with GraphQL
- 💜 Easy to use with Redux

## Usage

Run **development server**

```bash
yarn start # or yarn start:nodemon
```

Create **production bundle**, splits JS and CSS files and creates manifest, map files, PWA icons and Service Worker, all saved in `/dist`

```bash
yarn run build:prod
```

Run a regular pm2 process

```bash
yarn start:prod
```

Run in a **Docker** container with pm2

```bash
yarn start:docker
```

## Todo

- [x] Code splitting
- [x] Progressive web app
- [x] .env files support
- [x] CSS vendor prefixes
- [x] Webpack image loaders
- [x] Async/await support
- [x] Hot reload with code splitting
- [x] Full Docker support
- [ ] Basic testing

## Licence

Copyright 2018 Nure. MIT.

[daviddm-img]: https://david-dm.org/nuremx/react-boilerplate.svg
[daviddm-url]: https://david-dm.org/nuremx/react-boilerplate
