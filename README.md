# [danscottjones.com]

[ ![Heroku][heroku_status_img]][danscottjones.com]

[ ![Codeship Status for dan-j/danscottjones.com][codeship_status_img]][codeship_project]

Personal blog for [dan-j]. Built with [React], backed by [Contentful], it's a simple app for sharing my thoughts!

## Usage

The app is built with [yarn], but you can still use npm if you prefer. Since all data is backed by Contentful, all we do is build static files with Webpack and serve them with [http-server]

    yarn
    npm start
    
## Development

You can run the app in "development" mode, using [webpack-dev-server], allowing hot-reloading of react components in the browser. Simply run the command:

    npm run dev
    
## Tests/CI

The app is tested using [jest]; to run tests it's as simple as running:

    jest
   
There's also an npm script so you could also run:

    npm run test
   
The project is built by [Codeship], the current status can be seen at the top of this README.md or from Codeship [itself][codeship_project]. Pull requests can only be merged to master if tests pass.

## Deployment

The app is currently deployed with [Heroku], changes to `master` are automatically deployed and is available at [danscottjones.com]

[codeship_status_img]: https://img.shields.io/codeship/25b8e5f0-2294-0135-25df-4eac78e67dd1/master.svg
[codeship_project]: https://app.codeship.com/projects/221718
[heroku_status_img]: http://heroku-badge.herokuapp.com/?app=danscottjones-prod&style=flat&svg=1&root=index.html
[dan-j]: https://github.com/dan-j
[React]: https://facebook.github.io/react/
[Contentful]: https://www.contentful.com/
[yarn]: https://yarnpkg.com/en/
[http-server]: https://github.com/indexzero/http-server
[webpack-dev-server]: https://github.com/webpack/webpack-dev-server
[jest]: https://facebook.github.io/jest/
[Codeship]: http://codeship.com/
[Heroku]: https://heroku.com
[danscottjones.com]: http://danscottjones.com
