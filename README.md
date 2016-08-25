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

## Publish static site to Amazon's S3:

`npm run publish`

**NOTE:**

You will need to set up an S3 bucket for static site hosting.
You also need to set up your local command line tools for your AWS account for
it to work.


## Site Structure

- main.js, core routing and mounting logic.
- routes.json, declared routes.
- run.js, build scripts
- /pages/home/home.js, An example of a route entrypoint.
- /pages/home/home.css, The page specific css for that route.
- /public/*, the static file directory that gets deployed to S3 and where the bundle is built.
You can put images or static files in here as long as they don't conflict with the
core site filenames.
- /public/index.ejs.  The html template rendered by the site.
- /components/Layout/Layout.js, a React component
- /components/Layout/Layout.css, component specific css
- /core/*.js, The inner code files for routing and history. Probably don't need to touch.
