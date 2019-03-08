#!/usr/bin/env bash
echo 'Deleting existing modules & package.json'
pwd
rm -r ./node_modules
rm -r ./package.json
rm -r ./package-lock.json
echo 'Downloading necessary packages for project'
npm install express
npm install random-name
npm install give-me-a-joke
mv ./package-lock.json ./package.json
open http://localhost:3000
node ./app.js