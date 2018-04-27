var information;
var arryCounter = 0;
var objectCounter = 0;
var counter = 0;

$(function() {
	$('#create').click();
});

// Object判定用メソッド
var isObject = function(o) {
	  return (o instanceof Object && !(o instanceof Array)) ? true : false;
	};

// JSON要素判定メソッド
var dom = function(json) {
	for(key in json){
		// 配列判定
		if(Array.isArray(json[key])){
			arryCounter++;
			dom(json[key]);
		// オブジェクト判定
		}else if(isObject(json[key])){
			objectCounter++;
			dom(json[key]);
		// その他
		}else{
			//alert(key + "の項目値は" + information[key] + "です。");
			counter++;
		}
	}
	alert("配列：" + arryCounter + "　オブジェクト：" + objectCounter + "　項目：" + counter);
}

function OnCreateTable(){
	var jsondata = $('#jsontext').val();
	dom(JSON.parse(jsondata));
}