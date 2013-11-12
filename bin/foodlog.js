#!/usr/bin/env node

var program = require('commander');

var foodlog = require('./../lib/foodlog');

program
  .version('0.0.1');

program.parse(process.argv);
