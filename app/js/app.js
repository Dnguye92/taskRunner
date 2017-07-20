var CrNav = angular.module('CrNav', ['ngRoute']);

CrNav.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'index.html'
	})
}])

CrNav.controller('NewLinksCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('./js/navLinks/newLinks.json').success(function(data) {
		$scope.newLinkData = data;
		$scope.newLinkName = 'name';
		console.log(data);
	})
}])