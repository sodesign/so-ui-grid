"use strict";
function TableGridCtrl($scope) {
	$scope.unit = "px";
	var columnSize = 10;
	var rowSize = 21

	$scope.columns = [];
	var w = 0;
	var c;
	for (var i = 1; i <= columnSize; i++) {
		c = {
			id: "C" + i, 
			width: i == 1 ? 40 : 100, 
			name: "列" + i
		};
		$scope.columns.push(c);
		w += c.width;
	};
	$scope.totalWidth = w + 2;

	$scope.rows = [];
	var r;
	for (var i = 1; i <= rowSize; i++) {
		r = {};
		for (var j = 1; j <= columnSize; j++) {
			r["C" + j] = i + "-" + j;
			if (i % 5 == 0 && j > 1) {
				r["C" + j] += " 长内容 长内容 长内容 长内容";
			};
		};
		$scope.rows.push(r);
	};
}