<p align="center">
  <img width="500px" src="/logo.png">
</p>

<h1 align="center">MTS</h1>

<p align="center">https://mts.github.io/mts/</p>

<p align="center">
  <a href="https://codecov.io/gh/mts/mts">
    <img src="https://codecov.io/gh/mts/mts/branch/master/graph/badge.svg" />
  </a>
</p>

## Client

- ReactJS, ReduxJS Client
  - deployed to and running at https://mts.github.io/mts/

## Server

- NodeJS & ExpressJS Server
  - deployed to https://dashboard.heroku.com/apps/mts-http-server
  - running at https://mts-http-server.herokuapp.com/

## Heroku Setup, Deployment and Monitoring

- `Login`: `heroku login`
- `Create app`: `heroku create mts-http-server`
- `Add remote`: `git remote add origin https://git.heroku.com/mts-http-server.git`
- `Set build pack 1`: `heroku buildpacks:set -a mts-http-server https://github.com/Pagedraw/heroku-buildpack-select-subdir`
- `Set build pack 2`: `heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs#v133 -a mts-http-server`
- `Configure build pack`: `heroku config:add BUILDPACK='packages/server=https://github.com/heroku/heroku-buildpack-nodejs#v133' -a mts-http-server`
- `Add environment variable(s)`: `heroku config:add PORT='3001' -a mts-http-server`
- `Deploy`: `git push heroku master`
- `Monitor`: `heroku logs --tail`
- `Check app`: `https://mts-http-server.herokuapp.com/`
- `Help`: `https://help.heroku.com/P1AVPANS/why-is-my-node-js-app-crashing-with-an-r10-error`
