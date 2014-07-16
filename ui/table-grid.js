"use strict";
function TableGridCtrl($scope) {
	$scope.unit = "px";
	var columnSize = 40;
	var rowSize = 100;

	var columns = [];
	var w = 0;
	var c;
	for (var i = 1; i <= columnSize; i++) {
		c = {
			id: "C" + i, 
			width: i == 1 ? 40 : 100, 
			name: ((i % 5 == 0 && i > 1) ? "ccccccccccccccccccc" : "列") + i
		};
		columns.push(c);
		w += c.width;
	};

	var rows = [];
	var r;
	for (var i = 1; i <= rowSize; i++) {
		r = {};
		for (var j = 1; j <= columnSize; j++) {
			r["C" + j] = "000" + i + "-" + j;
			if (i % 5 == 0 && j > 1) {
				r["C" + j] += " 长内容 长内容 长内容 长内容";
			};
		};
		rows.push(r);
	};

	$scope.totalWidth = w + 2;
	$scope.columns = columns;
	$scope.rows = rows;
}

var $gb = angular.element(".body");
var $gh = angular.element(".header");
var $ght = $gh.children();
$gb.on("scroll", function(e){
	//console.log(this.scrollLeft + ":" + $gh[0].scrollLeft);
	$ght[0].style.left = (-this.scrollLeft) + "px";
	//console.log(this.scrollLeft + ":" + $gh[0].scrollLeft);
});