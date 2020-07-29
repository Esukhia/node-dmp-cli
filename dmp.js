#!/usr/bin/env node
var fs = require('fs');
var program = require('commander');
var dmp_module = require("./diff_match_patch.js");

var dmp = new dmp_module.diff_match_patch();
dmp.Diff_Timeout = 0

function log_list_of_tuples(diffs) {
  // log diffs into json like {"diffs": <list-of-tuples>}
  var diffs_arr = []
  diffs_string = '['
  for (var d of diffs) {
    diffs_arr.push([d[0], d[1].replace('\n', '\\n')])
  }

  diffs_json = JSON.stringify(diffs_arr)
  console.log(diffs_json)
}

function diff(text1_path, text2_path) {
  // read srouce and destination text
  var text1 = fs.readFileSync(text1_path, 'utf8');
  var text2 = fs.readFileSync(text2_path, 'utf8');

  // find the diff of source to destination text.
  var diffs = dmp.diff_main(text1, text2);

  // stdout the diffs
  log_list_of_tuples(diffs)
}

program
  .version('0.0.3')
  .command('diff <text1_path> <text2_path>')
  .description('Compute diff between text1 and text2')
  .action(diff);

program.parse(process.argv);
