<p align="center">
  <img width="500px" src="/logo.png">
</p>

<h1 align="center">MTS GitHub IO</h1>

<p align="center">https://mts.github.io/ website</p>

<p align="center">
  <a href="https://codecov.io/gh/mts/mts.github.io">
    <img src="https://codecov.io/gh/mts/mts.github.io/branch/master/graph/badge.svg" />
  </a>
</p>

## Client

- ReactJS, ReduxJS Client
  - deployed to and running at https://mts.github.io/

## Server

- NodeJS & ExpressJS Server
  - deployed to https://dashboard.heroku.com/apps/mts-github-io-server
  - running at https://mts-github-io-server.herokuapp.com/

## Heroku Setup, Deployment and Monitoring

- `Login`: `heroku login`
- `Create app`: `heroku create mts-github-io-server`
- `Add remote`: `git remote add origin https://git.heroku.com/mts-github-io-server.git`
- `Set build pack 1`: `heroku buildpacks:set -a mts-github-io-server https://github.com/Pagedraw/heroku-buildpack-select-subdir`
- `Set build pack 2`: `heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs#v133 -a mts-github-io-server`
- `Configure build pack`: `heroku config:add BUILDPACK='packages/server=https://github.com/heroku/heroku-buildpack-nodejs#v133' -a mts-github-io-server`
- `Add environment variable(s)`: `heroku config:add PORT='3001' -a mts-github-io-server`
- `Deploy`: `git push heroku master`
- `Monitor`: `heroku logs --tail`
- `Check app`: `https://mts-github-io-server.herokuapp.com/`
- `Help`: `https://help.heroku.com/P1AVPANS/why-is-my-node-js-app-crashing-with-an-r10-error`
