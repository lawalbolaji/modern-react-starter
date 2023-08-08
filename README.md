# Modern React Starter

This is a configurable starter template for developing modern single page applications in react. It ships with a suite of tools to support safe and scalable development, testing and deployment.

_Note: This project is currently in development and will continue to receive updates_\_

A live demo is available [here]("./").

<!-- some introduction here -->

---

## ⚙️ Getting Started

This template📓 is designed to help developers get up and running 💨 quickly when building react apps without worrying about tooling configuration or setting up regularly used dependencies, and ships with sensible defaults for a production grade app in many cases.

For more experienced developers, the template exposes the configurations for the underlying toolchains so you can easily override some behaviors.

You can follow the instructions below to get started:

> To run projects based on this template locally, you need to have Nodejs installed. Please refer to these [instructions](https://nodejs.org/en/download/package-manager) to setup nodejs if you don't already have it. You can run `node --version` to confirm that Nodejs is installed.

### 📚 Installation Steps

[x] Clone this repo:

```sh
> git clone --depth=1 git@github.com:lawalbolaji/modern-react-starter.git
```

[x] Install the associated dependencies:

> You can use any package manager that is compatible with nodejs, but npm is used here since it ships with nodejs by default and works well for most use-cases

```sh
> npm install
```

[x] Start a local dev server:

```sh
> npm run dev:start
```

[x] The web app should be running at `http://localhost:6674`

#### Using the template

To use this template, follow the installation steps described above. After setting up, you can modify the src directory to meet your project specifications.

##### Available scripts

[x] Run local dev server

> This uses webpack-dev-server and needs to be installed alongside webpack. To override some default configuration, e.g `port`, for the server, override the `devServer` property in the `webpack.config.js file`

```sh
"dev:start": "eslint './src/**/*.{js,jsx,ts,tsx}' && webpack serve --mode development",
```

[x] Compile CI build

```sh
"build:ci": "eslint './src/**/\*.{js,jsx,ts,tsx}' && prettier . --check './src/**/\*.{js,jsx,ts,tsx}' && webpack --mode production",
```

[x] Compile regular build

```sh
"build": "webpack --mode production"
```

<!-- ##### CI/CD -->

<!-- ##### Deployment -->

<!-- ##### Runtime Issues -->

<!-- some errors that might happen if they missed some steps above -->

### Tooling

#### NodeJs & NPM

To run projects based on this template locally, you need to have Nodejs installed. Please refer to these [instructions](https://nodejs.org/en/download/package-manager) to setup nodejs if you don't already have it. You can run `node --version` to confirm that Nodejs is installed.

#### Babel

The template allows you to take advantage of more modern js apis and uses [babel](https://babeljs.io/) to transpile the newer js syntax to backwards compatible js, across majority of environments. It uses the following presets:

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
}
```

#### Webpack

The template uses [webpack](https://webpack.js.org/) to generate a minified bundle of all of your development assets, that you can run confidently in the browser. It takes advantage of webpack's hash-based bundle naming to efficiently manage client caching of your static assets in the browser.

> For more experienced developers, here's a feature comparison on webpack with other bundlers: `https://webpack.js.org/comparison/`

It also ships with a local development (webpack-dev-server), with hot-module-reloading and code splitting features to enhance your development experience. You can modify some of the defaults by overriding properties in the `webpack.config.js` file.

```json
{
  "context": "project_dir",
  "entry": "entry_file.ext",
  "output": {
    // ...
  },
  "devServer": {
    "port": 6674,
    // ...
  },
  // ...
};

```

#### Typescript

Developing large applications with no type checking support can be a source of really nasty headaches.

_(No type checking)_:

```ts
function getLowercaseValue(upperCaseText) {
  // ...do some operation on text data
}

getLowercaseValue({}); // all hell breaks lose
```

To address this issue, the template ships with, essentially zero-config, support for typescript.

Author your beautifully structured '\*.{js,jsx,ts,tsx}' files with peace of mind, and go on to change the world, one great app at a time.

#### Eslint

The template is highly opinionated and enforces certain linting rules for your application using [eslint](https://eslint.org/).

#### Prettier

This template enforces the use of prettier for formatting code and ensuring consistent styling across the project, based on preferences specified here:

```json
{
    "tabWidth": 2
},
```

This will help reduce merge conflicts when there are multiple contributors to the same projects and ensure consistency across the project. You can alter these rules as required to suit your own needs by modifying the config [options](https://prettier.io/docs/en/options).

## Contributing

All contributions are welcome.

<!-- ### Bugs & Optimizations

### Feature

### Documentation

## 🔒 Security -->

## License: ©️

This project is available for free use and distribution under the [ISC License](https://opensource.org/license/isc-license-txt/).

<!-- add deployment instructions here, consider docker -->
