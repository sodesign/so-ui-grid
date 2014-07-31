"use strict";
var myapp = angular.module("myapp", []);
 
myapp.directive('grid', function() {
	return {
		replace: true,
		restrict: 'E',
    transclude: true,
    scope: {},
		controller: function($scope, $element, $attrs, $transclude) {
			console.log("grid.controller");
			$scope.unit = $attrs["unit"];
			$scope.columns = [];
			this.addColumn = function(column) {
				console.log(column);
				$scope.columns.push(column);
			console.log($scope);
			}
			console.log("grid.unit=" + $scope.unit);
			console.log($scope);
		},
		template: '<div class="grid">'
			+ '<div class="header">'
			//+ '<col ng-repeat="c in columns" ng-style="{'width': c.width + unit}"/>'
			+ '</div>'
			+ '<div class="body">'
			+ 'body'
			+ '</div>'
			+ '<columns ng-transclude></columns>'
			+ '</div>'
	};
});
 
myapp.directive('column', function() {
	return {
		require : '^?grid',
		replace: false,
		restrict: 'E',
		link : function(scope, element, attrs, gridController) {
			console.log("column.link");
			var column = {};
			column.width = parseFloat(attrs["width"]);
			column.label = attrs["label"];
			gridController.addColumn(column);
		}
	};
});

myapp.controller("DemoController", function($scope){
	$scope.name = "dragon";
});