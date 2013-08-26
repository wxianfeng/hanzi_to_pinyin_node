var fs = require('fs');
var root = fs.realpathSync('./');
var path = root + "/lib/hz2py.json";
var content = fs.readFileSync(path, "utf8");
var json = JSON.parse(content);

var hanzi_unicode_start = 19968;
var hanzi_unicode_end = 40869;
var letter_upcase_start = 65;
var letter_upcase_end = 90;
var letter_downcase_start = 97;
var letter_downcase_end = 122;

var is_hanzi = function(codepoint){
	if(codepoint >= hanzi_unicode_start && codepoint <= hanzi_unicode_end)
		return true;
	return false;
};

var is_letter = function(codepoint){
	return (codepoint >= letter_upcase_start && codepoint <= letter_upcase_end) || (codepoint >= letter_downcase_start && codepoint <= letter_downcase_end)
};

var str = "";

var append = function(values){
	if(str.length == 0){
		str += values.join(",");
	}else{
		var lastchar = str[str.length - 1];
		if(lastchar == ";")
			str += values.join(",");
		else
			str += ";";
			str += values.join(",");
	}
};

var hanzi_2_py = function(hanzi){
	str = "";
	for(i=0;i<hanzi.length;i++){
		var codepoint = hanzi.charCodeAt(i);
		var prev_codepoint = hanzi.charCodeAt(i-1);
		var zi = hanzi[i];
		if(is_hanzi(codepoint)){
			var values = json[zi];
			append(values);
		}else{
			if(str.length == 0)
				str += zi;
			else{
				var lastchar = str[str.length -1];
				var last_codepoint = lastchar.charCodeAt(0);
				if( lastchar == ";")
					str += zi;
				else if(is_letter(last_codepoint)){
					if(is_hanzi(prev_codepoint)){
						str += ";";
						str += zi;
					}else{
						str += zi;
					}
				}else{
					str += ";";
					str += zi;
				}
			}
		}
	}
	return str;
};

exports.hanzi_to_py = hanzi_2_py;
