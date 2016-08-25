# React Static Boilerplate

A comprehensive static hosted site.

Based off of https://github.com/kriasoft/react-static-boilerplate

## Getting started:

```
git clone https://github.com/DDKnoll/react-static
npm install
```

## Features:

- Babel
- Webpack hot module reloading for development.
- ESLINT using AirBnB's awesome javascript linter.
- JSX and React.
- Precss, Postcss, and Autoprefixer loaders for webpack
- JSON, [png|jpg|jpeg|gif|svg|woff|woff2file], Markdown, [eot|ttf|wav|mp3], loaders
for bundling all of your assets into webpack.
- Client side routing and webpack chunks for super fast page loads.

## Develop:

`npm start`

## Publish static site to AWS:

`npm run publish`

**NOTE:**

You will need to set up an S3 bucket for static site hosting.
You also need to set up your local command line tools for your AWS account for
it to work.
