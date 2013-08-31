hanzi_to_pinyin_node
====================

chinese hanzi to pinyin via node.js, copied from [hanzi_to_pinyin](http://rubygems.org/gems/hanzi_to_pinyin) ruby gem.

### Install

`npm install hanzi_to_pinyin`

### Usage

```javascript
var hz_to_py = require("hanzi_to_pinyin");
hz_to_py.hanzi_to_pinyin("测试");
```

### Sample

```javascript
assert.equal(hanzi_to_pinyin.hanzi_to_pinyin("ab你好c"),'ab;ni;hao;c');
assert.equal(hanzi_to_pinyin.hanzi_to_pinyin("我们"),"wo;men");
assert.equal(hanzi_to_pinyin.hanzi_to_pinyin("yyf"),"yyf");
assert.equal(hanzi_to_pinyin.hanzi_to_pinyin("拗Smith"),"ao,niu;Smith");
assert.equal(hanzi_to_pinyin.hanzi_to_pinyin("测试1"),"ce;shi;1");
assert.equal(hanzi_to_pinyin.hanzi_to_pinyin("测_试-"),"ce;_;shi;-");
assert.equal(hanzi_to_pinyin.hanzi_to_pinyin("2"),"2");
```

### Licence

MIT
