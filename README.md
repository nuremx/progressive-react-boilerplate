<img src="https://raw.githubusercontent.com/nuremx/react-boilerplate/master/.github/banner.png" align="center" alt="Progressive React Boilerplate banner" />

# Progressive React Boilerplate

[![Dependency Status][daviddm-img]][daviddm-url]
[![DevDependency Status][daviddm-dev-img]][daviddm-dev-url]

Boilerplate to create a greatly optimized React PWA, and using an Express server, customized so it can be easily integrated with other dependencies and plugins.

---

## Features

- 💛 **JS** Optional chaining, class properties and decorators, absolute imports
- ⚛️ **React** `v16`
- 🔄 **React Router** `v4`
- 💠 **Express** server
- 〽️ **Babel `7` on server and web app**
- 🔥 **React Hot Reload** with webpack-hot-middleware
- ⭕️ **PostCSS** with Sass-like syntax, auto-prefixer and modern css support
- ✂️ **Code splitting** for .js and .css
- 📱 **Progressive Web App** ready, service worker and manifest
- 📦 **Webpack** `v4`
- 👮 Basic security with **helmet** and **hpp**
- 🐳 **Docker** support

- 🌸 Easy to integrate with Apollo GraphQL
- 💜 Easy to integrate with Redux

---

## Usage

> Targeted for node 10, you can set a minimum to 8 in `.babelrc`

> You can set env variables at `config`, use `.env.development` and `.env.production`

### Development

Runs development server with react hot reload and nodemon

```bash
npm start
```

## Production

### Web app bundle

Saves bundle files at `dist/app`

```bash
> npm run build:app
```

> Don't forget to set your app icons at `src/assets`

### Server

Compiles server at dist/server and runs simple production node process

```bash
> npm run build
> npm run serve
```

Using ** Docker **:

```bash
> docker build -t tag-name . # Build image, this compiles server
> # More docker stuff
> npm run serve:docker # In container, will run pm2 with clustering
```

---

## Todos

- [ ] Basic testing
- [ ] Optional SSR rendering

---

## License

Copyright 2018 Nure. MIT.

[daviddm-img]: https://david-dm.org/nuremx/react-boilerplate.svg
[daviddm-url]: https://david-dm.org/nuremx/react-boilerplate
[daviddm-dev-img]: https://david-dm.org/nuremx/react-boilerplate/dev-status.svg
[daviddm-dev-url]: https://david-dm.org/nuremx/react-boilerplate?type=dev
