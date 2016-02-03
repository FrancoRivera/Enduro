#!/usr/bin/env node
var path = require("path")
  , fs = require("fs")
  , args = process.argv.slice(1)

var arg, base;
do arg = args.shift();
while ( fs.realpathSync(arg) !== __filename
  && !(base = path.basename(arg)).match(/^enduro$|^enduro.js$|^enduro$/)
)

require("./index").run(args)