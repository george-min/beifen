(function (angular) {
	'use strict';
	// Your starting point. Enjoy the ride!
	var todosApp = angular.module("todosApp",[]);
	todosApp.controller("todosCtrl",["$scope",function ($scope) {
		$scope.content = "";
		$scope.items = [
			{id:0.1,content:"看书",completed:false},
			{id:0.2,content:"学习",completed:false},
			{id:0.3,content:"健身",completed:true},
			{id:0.4,content:"散步",completed:false}
		];
	}]);
})(angular);
