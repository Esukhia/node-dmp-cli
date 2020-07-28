#!/usr/bin/env node
var fs = require('fs');
var program = require('commander');

function diff(src_path, dest_path) {
  var src_text = fs.readFileSync(src_path, 'utf8');
  var dest_text = fs.readFileSync(dest_path, 'utf8');
  console.log(src_text);
  console.log(dest_text)
}

program
  .version('0.0.1')
  .command('diff <src_path> <dest_path>')
  .action(diff);

program.parse(process.argv);
