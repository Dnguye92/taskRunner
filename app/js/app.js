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

CrNav.controller('ClothesLinksCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('./js/navLinks/clothesLinks.json').success(function(data) {
		$scope.clothesLinkData = data;
		console.log(data);
	})
}])

CrNav.controller('PlusLinksCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('./js/navLinks/plusLinks.json').success(function(data) {
		$scope.plusLinksData = data;
		console.log(data);
	})
}])

CrNav.controller('AccLinksCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('./js/navLinks/accLinks.json').success(function(data) {
		$scope.accLinksData = data;
		console.log(data);
	})
}])

CrNav.controller('SaleLinksCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('./js/navLinks/saleLinks.json').success(function(data) {
		$scope.saleLinksData = data;
		console.log(data);
	})
}])


