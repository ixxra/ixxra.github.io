#!/usr/bin/env node

var spawn = require('child_process').spawn;

spawn('sass', [
  '-I', 'foundation/assets/scss',
  'src/scss/main.scss:public/styelsheets/main.css']);
