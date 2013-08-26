#!/usr/bin/env node

var hanzi_to_pinyin = require('../lib/hanzi_to_pinyin');
var args = process.argv.slice(2);
console.log(hanzi_to_pinyin.hanzi_to_pinyin(args[0]));
