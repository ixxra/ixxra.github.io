#!/usr/bin/env node
var pug = require('pug');
var fs = require('fs');
var yaml = require('js-yaml');

const JADE = './src/layout/base.jade';
const YAML = './src/config.yml';
const TARGET = './public/index.html';


function renderHtml(options){
  options.pretty = true;
  var html = pug.renderFile(JADE, options);
  fs.writeFile(TARGET, html);
}

try {
  fs.readFile(YAML, function(err, data){
    if (err) throw err;

    var options = yaml.safeLoad(data);
    renderHtml(options);
  })
} catch (e) {
  console.log(e);
}


//var html = fn({ myArry: myArry, myObj: myObj });
