/* global angular */
(function () {
	'use strict';

	angular
		.module('myApp', ['ngRoute', 'ngMaterial', 'myApp.tpls'])
		.config(['$routeProvider', '$locationProvider', MyAppConfig]);

	function MyAppConfig($routeProvider, $locationProvider) {
		$routeProvider
			.when('/view1', { templateUrl: 'views/partials/partial1.html', controller: 'MyCtrl1', controllerAs: 'ctrl' })
			.when('/view2', { templateUrl: 'views/partials/partial2.html', controller: 'MyCtrl2', controllerAs: 'ctrl' })
			.otherwise({ redirectTo: '/view1' });

		$locationProvider.html5Mode(true);
	}
})();

