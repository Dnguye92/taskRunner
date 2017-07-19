var CrNav = angular.module('CrNav', ['ngRoute']);

CrNav.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'index.html'
	})
}])