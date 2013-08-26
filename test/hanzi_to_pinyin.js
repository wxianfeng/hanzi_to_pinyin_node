var assert = require('assert'),
		hanzi_to_pinyin = require('../lib/hanzi_to_pinyin.js');

assert.equal(hanzi_to_pinyin.hanzi_to_py("ab你好c"),'ab;ni;hao;c');
assert.equal(hanzi_to_pinyin.hanzi_to_py("我们"),"wo;men");
assert.equal(hanzi_to_pinyin.hanzi_to_py("yyf"),"yyf");
assert.equal(hanzi_to_pinyin.hanzi_to_py("拗Smith"),"ao,niu;Smith");
assert.equal(hanzi_to_pinyin.hanzi_to_py("测试1"),"ce;shi;1");
assert.equal(hanzi_to_pinyin.hanzi_to_py("测_试-"),"ce;_;shi;-");
assert.equal(hanzi_to_pinyin.hanzi_to_py("2"),"2");

