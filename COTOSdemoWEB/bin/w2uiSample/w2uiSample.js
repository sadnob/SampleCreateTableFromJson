$(function() {

		// API呼び出しボタン処理
	$('#search').click(function() {
		var url = 
		$.ajax({
			type: 'GET',
			url: 'https://dev-api.cotos.ricoh.co.jp/estimation/api/estimation/',
			headers: {Authentication: 'Bearer sid:mid:cotosmightyoubehappy'},
			dataType: 'json',
			data: {esimationId: $('#estimationId').val()},
			success: function(data) {
				//取得成功したら実行する処理
				console.log("ファイルの取得に成功しました");
			},
			error:function() {
				//取得失敗時に実行する処理
				console.log("何らかの理由で失敗しました");
			}
		});
	});
	
	var columnsDate = [{field:"fname",caption:"FirstName"},{field:"lname",caption:"LastName"},{field:"email",caption:"Email"},{field:"sdate",caption:"StartDate"}];

	//var columnsDate = [{field:'fname',caption:'FirstName',size:'30%'},{field:'lname',caption:'LastName',size:'30%'},{field:'email',caption:'Email',size:'40%'},{field:'sdate',caption:'StartDate',size:'120px'}];
	var recordsDate = [{recid:1,fname:"Peter",lname:"Jeremia",email:'peter@mail.com',sdate:'2/1/2010'},{recid:2,fname:"Bruce",lname:"Wilkerson",email:'bruce@mail.com',sdate:null},{recid:3,fname:"John",lname:"McAlister",email:'john@mail.com',sdate:'1/16/2010'},{recid:4,fname:"Ravi",lname:"Zacharies",email:'ravi@mail.com',sdate:'3/13/2007'},{recid:5,fname:"William",lname:"Dembski",email:'will@mail.com',sdate:'9/30/2011'},{recid:6,fname:"David",lname:"Peterson",email:'david@mail.com',sdate:'4/5/2010'}];
	
	//var columnsDate = [{coumoku1:'項目1',coumoku2:'項目2',coumoku3:'項目3',coumoku4:'項目4',coumoku5:'項目5'}];
	//var recordsDate = [{a:10,b:20,c:30,d:40,e:50},{a:10,b:20,c:30,d:40,e:50},{a:10,b:20,c:30,d:40,e:50},{a:10,b:20,c:30,d:40,e:50}];

	
	// 表作成
	$('#grid').w2grid({
		name : 'grid',
		header : 'List of Names',
		columns : columnsDate,
		records : recordsDate
	});

});
