#!/bin/bash

npm un -S @babel/cli nodemon rimraf && npm i -S @babel/cli nodemon rimraf

npm run clean-up && npm run install-packages
