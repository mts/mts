<p align="center">
  <img width="250px" height="250px" src=".docs/image/logo.jpg">
</p>

<h1 align="center">MTS</h1>

<p align="center">
  <a aria-label="npm package" href="https://www.npmjs.com/package/mts-client">
    <img alt="" src="https://img.shields.io/npm/v/mts-client.svg">
  </a>

  <a aria-label="travis build" href="https://travis-ci.org/mts/mts">
    <img alt="" src="https://img.shields.io/travis/mts/mts.svg?logo=travis">
  </a>

  <a href="https://codecov.io/gh/mts/mts">
    <img src="https://codecov.io/gh/mts/mts/branch/master/graph/badge.svg" />
  </a>

  <a aria-label="downloads" href="http://npm-stat.com/charts.html?package=mts-client&from=2018-10-13">
    <img alt="" src="https://img.shields.io/npm/dm/mts-client.svg">
  </a>

  <a aria-label="last commit" href="https://github.com/mts/mts/commits/master">
    <img alt="" src="https://img.shields.io/github/last-commit/mts/mts.svg">
  </a>

  <a aria-label="contributors graph" href="https://github.com/mts/mts/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/mts/mts.svg">
  </a>

  <a aria-label="license" href="https://github.com/mts/mts/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mts/mts.svg" alt="">
  </a>
</p>

<h2 style="color: #006400;">🗿 Status</h2>

<blockquote style="margin: 0; padding: 0 24px; color: olive; font-weight: 600; font-size:1em">🐝 This project is a work in progress and is not ready for production use yet!</blockquote>

<h2 style="color: #006400;">🗿 Introduction</h2>

<blockquote style="margin: 0; padding: 0 24px; color: olive; font-weight: 600; font-size:1em">🐝 Sharing is caring. Following is a collection of concepts which any maintainer needs to master in order to gracefully maintain this project and scale its implementation along with its unit and integration tests.</blockquote>

<h2 style="color: #006400;">🗿 Concepts</h2>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 JavaScript Runtime</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Node.js</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Node</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s): <a style="color: #006400;" href="https://github.com/nodejs/node">node</a> repository on GitHub</li>
              <li>Information: <strong><em>Node is required to bootstrap the project. Linting, formatting, testing and building scripts run all on Node.</em></strong></li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Version Control</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Git (self)</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
        <summary style="color: #006400;">📜 Git</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><a style="color: #006400;" href="https://git-scm.com/">Git</a> distributed version control system</li>
              <li><a style="color: #006400;" href="https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud">Git Commands</a> documentation by Atlassian</li>
              <li>Information: <strong><em>Project source code is maintained in a Git repository. Using Git commands through the command prompt or a Git Client is essential.</em></strong></li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Git Hooks</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
        <summary style="color: #006400;">📜 Using Git Hooks</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s): <a style="color: #006400;" href="https://github.com/typicode/husky">husky</a> repository on GitHub</li>
              <li>Setup file(s):<a style="color: #006400;" href="https://github.com/mts/mts/blob/master/.huskyrc">.huskyrc</a></li>
              <li>Script(s) in project's package.json: n/a</li>
              <li>Information: <strong><em>Husky utilizes Git hooks such as pre-commit and pre-push</em></strong></li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 Running linters and testers against staged git files</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s): <a style="color: #006400;" href="https://github.com/okonet/lint-staged">lint-staged</a> repository on GitHub</li>
              <li>Setup file(s):
                <a style="color: #006400;" href="https://github.com/mts/mts/blob/master/.lintstagedrc">.lintstagedrc</a>
              </li>
              <li>Script(s) in project's package.json: n/a</li>
              <li>Information: <strong><em>lint-staged runs linters and testers against staged git files. Using lint-staged combined with husky and thus targeting pre-commit and pre-push Git hooks prevents source code not conforming to linting rules and formatting style being committed or pushed to the Git repository's origin</em></strong></li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Git Client</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Git Kraken</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><a style="color: #006400;" href="https://www.gitkraken.com/">Website</a></li>
              <li>Information: <strong><em>The coolest, the finest and the best Git client in the world 👌 Over 1.5 Million GitKraken Users❗</em></strong></li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 Sourcetree</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><a style="color: #006400;" href="https://www.sourcetreeapp.com/">Website</a></li>
              <li>Information: <strong><em>Sourcetree simplifies how you interact with your Git repositories so you can focus on coding. Visualize and manage your repositories through Sourcetree's simple Git GUI.</em></strong></li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Bootstrap</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Install</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        Run <kbd>rm -rf node_modules package-lock.json && npm install</kbd> for<br>
        <kbd>repository root</kbd>, <kbd>packages/http-server folder</kbd> and <kbd>packages/client folder</kbd><br>
        <strong><em> to remove node_modules directory, package-lock.json file and install all packages from scratch</em></strong>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Bootstrap</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        Run <kbd>npm run bootstrap</kbd>
        <strong><em>to run linting, formatting, testing and building sequentially</em></strong>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Start</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        Run <kbd>npm start</kbd><strong><em> in 1st terminal in packages/http-server folder to start up http-server</em></strong><br>
        Run <kbd>npm start</kbd><strong><em> in 2nd terminal in packages/client to start up webpack-dev-server</em></strong><br>
        Run <kbd>npm run test -- --watch --onlyChanged --verbose</kbd><strong><em> in 3rd terminal to let Jest watch changed tests</em></strong><br>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Dynamic Code Splitting</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <ul>
          <li><strong><em>Babel</em></strong> enables parsing dynamic imports through <a href="https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import">@babel/plugin-syntax-dynamic-import</a> since <a href="https://babeljs.io/blog/2019/07/03/7.5.0">v7.5.0</a></li>
          <li><strong><em>Webpack</em></strong> recommends this <a href="https://webpack.js.org/guides/code-splitting/#dynamic-imports">technique</a> instead of the legacy webpack-specific approach through optimization.splitChunks configuration option.
          </li>
        </ul>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Code Style</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Code Linting</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 JavaScript</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s): 
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/eslint/eslint">eslint</a> repository on GitHub</li>
                  <li><a style="color: #006400;" href="https://github.com/SublimeLinter/SublimeLinter-eslint">SublimeLinter-eslint</a> for Sublime Text</li>
                  <li><a style="color: #006400;" href="https://github.com/microsoft/vscode-eslint">vscode-eslint</a> for Visual Studio Code</li>
                  <li><a style="color: #006400;" href="http://plugins.jetbrains.com/plugin/7494-eslint">eslint plugin</a> for Webstorm and ItelliJ</li>
                </ul>
              </li>
              <li>Setup file(s):
                <a style="color: #006400;" href="https://github.com/mts/mts/blob/master/.eslintrc">.eslintrc</a>,
                <a style="color: #006400;" href="https://github.com/mts/mts/blob/master/.eslintignore">.eslintignore</a>
              </li>
              <li>JavaScript Style Guide(s):
                <a style="color: #006400;" href="https://github.com/airbnb/javascript">AirBnb JavaScript Style Guide</a>,
                <a style="color: #006400;" href="https://github.com/airbnb/javascript/tree/master/react">Airbnb React/JSX Style Guide</a>
              </li>
              <li>Script(s) in project's package.json:
                <ul>
                  <li>"lint:format": "npm-run-all lint format"</li>
                  <li>"lint": "npm-run-all lint:js:jsx lint:scss"</li>
                  <li>"lint:js:jsx": "eslint --ext .js --ext .jsx packages/**/src/**/*.{js,jsx} --fix"</li>
                </ul>
              </li>
              <li>Information: <strong><em>Linting scripts meant for JavaScript files recursively go through all js, jsx files under the src directory checking if the source code conforms to ESLint linting rules, applying auto fixes if possible and outputs all other violations through the console.</em></strong></li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 Sass</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s): 
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/stylelint/stylelint">stylelint</a> repository on GitHub</li>
                  <li><a style="color: #006400;" href="https://github.com/SublimeLinter/SublimeLinter-stylelint">SublimeLinter-stylelint</a> for Sublime Text</li>
                  <li><a style="color: #006400;" href="https://github.com/shinnn/vscode-stylelint">vscode-stylelint</a> for Visual Studio Code</li>
                  <li><a style="color: #006400;" href="https://www.jetbrains.com/help/idea/using-stylelint-code-quality-tool.html">activate stylelint</a> for Webstorm and ItelliJ</li>
                </ul>
              </li>
              <li>Setup file(s):
                <a style="color: #006400;" href="https://github.com/mts/mts/blob/master/.stylelintrc">.stylelintrc</a>,
                <a style="color: #006400;" href="https://github.com/mts/mts/blob/master/.stylelintignore">.stylelintignore</a>
              </li>
              <li>CSS Style Guide(s):
                <a style="color: #006400;" href="https://github.com/airbnb/css">Airbnb CSS / Sass Styleguide</a>
              </li>
              <li>Script(s) in project's package.json:
                  <ul>
                    <li>"lint:format": "npm-run-all lint format"</li>
                    <li>"lint": "npm-run-all lint:js:jsx lint:scss"</li>
                    <li>"lint:scss": "stylelint \"packages/**/src/**/*.scss\" --syntax=scss --fix"</li>
                  </ul>
              </li>
              <li>Information: <strong><em>Linting scripts meant for Sass files recursively go through all scss files under the src directory checking if the source code conforms to Stylelint linting rules, applying auto fixes if possible and outputs all other violations through the console.</em></strong></li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Code Formatting</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
        <summary style="color: #006400;">📜 HTML, JavaScript and Sass</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s): 
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/prettier/prettier">prettier</a> repository on GitHub</li>
                  <li><a style="color: #006400;" href="https://github.com/jonlabelle/SublimeJsPrettier">SublimeJsPrettier</a> for Sublime Text</li>
                  <li><a style="color: #006400;" href="https://github.com/prettier/prettier-vscode">prettier-vscode</a> for Visual Studio Code</li>
                  <li><a style="color: #006400;" href="https://plugins.jetbrains.com/plugin/10456-prettier">prettier plugin</a> for Webstorm and ItelliJ</li>
                </ul>
              </li>
              <li>Setup file(s):
                <a style="color: #006400;" href="https://github.com/mts/mts/blob/master/.prettierrc">.prettierrc</a>,
                <a style="color: #006400;" href="https://github.com/mts/mts/blob/master/.prettierignore">.prettierignore</a>
              </li>
              <li>Script(s) in project's package.json:
                <ul>
                  <li>"format": "npm-run-all format:js:jsx format:scss"</li>
                  <li>"format:js:jsx": "prettier --write \"packages/**/src/**/*.{js,jsx}\""</li>
                  <li>"format:scss": "prettier --write \"packages/**/src/**/*.scss\""</li>
                </ul>
              </li>
              <li>Information: <strong><em>Code formatting scripts meant for JavaScript and Sass files recursively go through all js, jsx and scss files under the src directory enforcing a consistent style by parsing code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.</em></strong></li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">File Formatting</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
        <summary style="color: #006400;">📜 EditorConfig</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s):
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/editorconfig">editorconfig</a> repository on GitHub</li>
                  <li><a style="color: #006400;" href="https://github.com/editorconfig/editorconfig-sublime">editorconfig-sublime</a> for Sublime Text</li>
                  <li><a style="color: #006400;" href="https://github.com/editorconfig/editorconfig-vscode">editorconfig-vscode</a> for Visual Studio Code</li>
                  <li><a style="color: #006400;" href="https://github.com/editorconfig/editorconfig-jetbrains">editorconfig-jetbrains</a> for Webstorm and IntelliJ</li>
                </ul>
              </li>
              <li>Setup file(s):
                <a style="color: #006400;" href="https://github.com/mts/mts/blob/master/.editorconfig">.editorconfig</a>
              </li>
              <li>Script(s) in project's package.json: n/a</li>
              <li>Information: <strong><em>File formatting configuration helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs</em></strong></li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Application Architecture</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">State Container</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Redux</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s): 
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/reduxjs/redux">redux</a> repository on GitHub</li>
                  <li><a style="color: #006400;" href="https://github.com/reduxjs/react-redux">react-redux</a> repository on GitHub</li>
                </ul>
              </li>
              <li>Setup file(s):
                <a style="color: #006400;" href="https://github.com/mts/mts/blob/master/packages/client/src/store/client.js">client.js</a> for regular store,
                <a style="color: #006400;" href="https://github.com/mts/mts/blob/master/packages/library/src/store/mock.js">mock.js</a> for mock store
              </li>
              <li>Script(s) in project's package.json: n/a</li>
              <li>Information: 
                <details>
                  <summary style="color: #006400;">Flux</summary>
                  <blockquote style="margin: 0; padding: 0 24px">
                    This project implements <a href="https://facebook.github.io/flux/">Flux </a>based application architecture through Redux state container and React integration for Redux. <br>
                    Components initiate changes by dispatching actions or thunks<br>
                    <img width="400px" height="250px" src=".docs/image/flux-component.png"> <br>
                    Dispatcher processes dispatched actions and thunks and reducer releases new state<br>
                    <img width="400px" height="250px" src=".docs/image/flux-flow.png"> <br>
                  </blockquote>
                </details>
                <details>
                  <summary style="color: #006400;">Store</summary>
                  <blockquote style="margin: 0; padding: 0 24px">
                    <ul>
                      <li>Each application in this project has a Redux store which implements the following:
                        <ul>
                          <li><strong><em>Actions</em></strong> to dispatch when mutating existing state in a syncronous flow</li>
                          <li><strong><em>Thunks</em></strong> to dispatch when mutating existing state in an asyncronous flow through redux-thunk middleware</li>
                          <li><strong><em>Reducer</em></strong> which takes existing state and an action as arguments and returns a new state. Immutability is achieved by spreading existing state to the level of mutation in the nested data structure</li>
                          <li><strong><em>State</em></strong>
                            <ul>
                              <li><strong><em>Default state</em></strong> to be used by the actual application store which consists of the following three partitions:
                                <ul>
                                  <li>context partition reflects user's signed in and authorization response states</li>
                                  <li>api partition reflects all from API endpoints' response states</li>
                                  <li>ui partition reflects all atomic design patterns' states</li>
                                </ul>
                              </li>
                              <li><strong><em>Mock state</em></strong>  to be used by a mock store when rendering snapshots and stories <br>
                                  Mock state consists of exactly the same context, api and ui partitions populated by static data.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong><em>Difference actions and thunks</em></strong> is that the redux dispatcher passes a dispached action onto the reducer as second argument whereas it directly calls the thunk instead.
                      </li>
                      <li>
                        <strong><em>AppStore class</em></strong> is meant to serve as application's state container and extends a base store called <strong><em>Store</em></strong> which sets
                        <ul> 
                          <li>the default application state in setAppDefaultState()</li>
                          <li>application state container in setAppStore()</li>
                          <li>populates application state in setAppCompleteState()</li>
                          <li>sets hot module reloading in setHotModuleReloading() when Webpack HotModuleReplacementPlugin interface is exposed under the module.hot property.</li>
                        </ul>
                      </li>
                        <li>
                          <strong><em>Store class</em></strong> sets redux-thunk as thunk middleware for redux in setMiddlewares() and composes enhancers in setEnhancer() when initialized.
                        </li>
                    </ul>
                  </blockquote>
                </details>
              </li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

## Client

- ReactJS, ReduxJS Client
  - deployed to and running at https://mts.github.io/mts/

## Server

- NodeJS & ExpressJS Server
  - deployed to https://dashboard.heroku.com/apps/mts-http-server
  - running at https://mts-http-server.herokuapp.com/mts

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
- `Clone`: `heroku git:clone -a mts-http-server`

## Github Pages

- rm -rf node_modules/gh-pages/.cache
- change `https://github.com/mts/mts.git` to `git@github.com:mts/mts.git` in `.git/config`

## Localhost

- `Free port 3000`: `kill $(lsof -t -i :3000)`
