#!/usr/bin/env node

const { execSync } = require('child_process');

execSync('wget https://lalanuno.files.wordpress.com/2015/02/5ccaa-david_hasselhoff_dog.jpg -O ~/cristiano.jpg')
execSync('osascript -e \'tell application "System Events" to set picture of every desktop to ("~/cristiano.jpg")\'')