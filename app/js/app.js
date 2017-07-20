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
		console.log(data);
	})
}])

CrNav.controller('ShoesLinksCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('./js/navLinks/shoesLinks.json').success(function(data) {
		$scope.shoesLinkData = data;
		console.log(data);
	})
}])

CrNav.controller('DressLinksCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('./js/navLinks/dressLinks.json').success(function(data) {
		$scope.dressLinkData = data;
		console.log(data);
	})
}])

