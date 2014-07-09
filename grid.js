function gridCtrl1($scope) {
	$scope.columnSize = 2;
	$scope.rows = [["11", "12"],["21", "22"]];

	$scope.addRow = function() {
		var row = [];
		for (var i = 1; i <= $scope.columnSize; i++) {
			row.push(($scope.rows.length + 1) + "" + i);
		};
		$scope.rows.push(row);
	}

	$scope.deleteRow = function() {
		$scope.rows.pop();
	}

	$scope.addColumn = function() {
		$scope.columnSize++;
		for (var i = 0; i < $scope.rows.length; i++) {
			$scope.rows[i].push(i + 1 + "" + $scope.columnSize);
		};

		// recaculate cell container's width for horizontal scroll
		console.debug($scope);
		for (var key in $scope) {
			
		};
	}

	$scope.deleteColumn = function() {
		if($scope.columnSize == 0) return;
		$scope.columnSize--;
		for (var i = 0; i < $scope.rows.length; i++) {
			$scope.rows[i].pop();
		};
	}
}

// -------------------------------------------------------
var module = angular.module("grid", []);

// service
module.service('bookService', ['$rootScope', function($rootScope) {
	var service = {
		books: [
			[1, "Magician", "Raymond E. Feist"],
			[2, "The Hobbit Hobbit", "J.R.R Tolkien"]
		],

		add: function (book) {
			console.debug("bookService.add:" + book);
			service.books.push(book);
			$rootScope.$broadcast('books.add');
		},

		remove: function (id) {
			for (var i = 0; i < service.books.length; i++) {
				if(service.books[i][0] == id){
					console.debug("bookService.remove:" + book);
					service.books.splice(i, 1);
				}
				$rootScope.$broadcast('books.remove');
			};
		}
	}
	return service;
}])

// controler
.controller("gridCtrl", ['$scope','bookService', function($scope, bookService) {
	$scope.name = "gridCtrl";
	$scope.$on('books.add', function(event) {
		$scope.rows = bookService.books;
		//$scope.$apply();//注意，原文这里少了这一行
	}); 
	$scope.rows = bookService.books;
	$scope.newId = function(){
		return bookService.books.length + 1;
	};

	$scope.addRow = function(){
		bookService.add([$scope.newId(), $scope.title, $scope.author]);
		//$scope.title = "";
		//$scope.author = "";
	};

	$scope.toggleRowSelect = function(){
		console.debug("toggleRowSelect");
	};
}]);

/*
// directive
.directive("addBookButton", ['bookService', function(bookService) {
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			element.bind("click", function() {
					bookService.addBook({ id: bookService.books.length + 1, title: "Star Wars", author: "George Lucas" });
			});
		}
	}
}]);
*/