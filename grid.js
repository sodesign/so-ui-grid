function gridCtrl($scope) {
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
var module = angular.module("myModule", []);

// service
module.service('bookService', ['$rootScope', function($rootScope) {
	var service = {
		books: [
			{ id: 1, title: "Magician", author: "Raymond E. Feist" },
			{ id: 2, title: "The Hobbit", author: "J.R.R Tolkien" }
		],

		addBook: function (book) {
			console.debug("addBook");
			service.books.push(book);
			$rootScope.$broadcast('books.update');
		},

		removeBook: function (id) {
			console.debug("removeBook: id=" + id);
			for (var i = 0; i < service.books.length; i++) {
				if(service.books[i].id == id) service.books.splice(i, 1);
				$rootScope.$broadcast('books.remove');
			};
		}
	}
	return service;
}]);

module.controller("booksCtrl", ['$scope','bookService', function($scope, bookService) {
	$scope.name = "booksCtrl";
	$scope.$on('books.update', function(event) {
		$scope.books = bookService.books;
		$scope.$apply();//注意，原文这里少了这一行
	}); 
	$scope.books = bookService.books;
	console.debug($scope.books.length);

	$scope.removeBook = function(){
		$scope.books.pop();
		console.debug("removeBook:" + $scope.books.length + "," + bookService.books.length);
	}
}]);

module.directive("addBookButton", ['bookService', function(bookService) {
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			element.bind("click", function() {
					bookService.addBook({ id: bookService.books.length + 1, title: "Star Wars", author: "George Lucas" });
			});
		}
	}
}]);