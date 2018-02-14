#!/usr/bin/env node

const { execSync } = require('child_process')
const wallpaper = require('wallpaper')

execSync(
  'wget https://lalanuno.files.wordpress.com/2015/02/5ccaa-david_hasselhoff_dog.jpg -O ./cristiano.jpg'
)

wallpaper.set('./cristiano.jpg').then(() => {
  console.log('Done')
})
