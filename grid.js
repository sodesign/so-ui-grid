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