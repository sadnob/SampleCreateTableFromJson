$(function() {

		// API呼び出しボタン処理
	$('#search').click(function() {
		var url = 
		$.ajax({
			type: 'GET',
			url: 'https://dev-api.cotos.ricoh.co.jp/estimation/api/estimation/?callback=?',
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
	
	var columnsDate = [ {
		field : 'fname',
		caption : 'First Name',
		size : '30%'
	}, {
		field : 'lname',
		caption : 'Last Name',
		size : '30%'
	}, {
		field : 'email',
		caption : 'Email',
		size : '40%'
	}, {
		field : 'sdate',
		caption : 'Start Date',
		size : '120px'
	} ];

	var recordsDate = [ {
		recid : 1,
		fname : "Peter",
		lname : "Jeremia",
		email : 'peter@mail.com',
		sdate : '2/1/2010'
	}, {
		recid : 2,
		fname : "Bruce",
		lname : "Wilkerson",
		email : 'bruce@mail.com',
		sdate : '6/1/2010'
	}, {
		recid : 3,
		fname : "John",
		lname : "McAlister",
		email : 'john@mail.com',
		sdate : '1/16/2010'
	}, {
		recid : 4,
		fname : "Ravi",
		lname : "Zacharies",
		email : 'ravi@mail.com',
		sdate : '3/13/2007'
	}, {
		recid : 5,
		fname : "William",
		lname : "Dembski",
		email : 'will@mail.com',
		sdate : '9/30/2011'
	}, {
		recid : 6,
		fname : "David",
		lname : "Peterson",
		email : 'david@mail.com',
		sdate : '4/5/2010'
	} ];
	
	// 表作成
	$('#grid').w2grid({
		name : 'grid',
		header : 'List of Names',
		columns : columnsDate,
		records : recordsDate
	});

});
