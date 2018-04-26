# React Boilerplate

Minimal boilerplate to create React PWA, managing state with Redux, and using a Express server making it ready to support other services.

## Features

* ⚛️ **React**
* 💜 **Redux**
* 🔄 **React Router** v4
* 💠 **Express** server
* 🔥 **React Hot Reload** (with webpack-hot-middleware)
* 🌐 **Axios** for network requests
* 💅 **Sass** styling
* ⚗️ **Stage 2**
* ✂️ **Code splitting**
* 📱 **Progressive Web App** ready, service worker and manifest
* 📦 **Webpack** v4
* 👮 Basic security with **helmet** and **hpp**

## Usage

Run **development server**

```
yarn start
```

Create **production bundle**, splits CSS files and creates manifest, map files, PWA icons and Service Worker (saved in `/dist`)

```
yarn run build:prod
```

## Todo

* [x] Code splitting
* [x] Progressive web app
* [ ] .env files support
* [ ] CSS vendor prefixes
* [ ] Webpack image loaders
* [ ] Testing

## Licence

MIT
