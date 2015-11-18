/* global angular */
(function () {
	'use strict';

	angular
		.module('myApp', ['ngRoute', 'ngMaterial'])
		.config(['$routeProvider', '$locationProvider', MyAppConfig]);

	function MyAppConfig($routeProvider, $locationProvider) {
		$routeProvider
			.when('/view1', { templateUrl: 'partials/partial1', controller: 'MyCtrl1', controllerAs: 'ctrl' })
			.when('/view2', { templateUrl: 'partials/partial2', controller: 'MyCtrl2', controllerAs: 'ctrl' })
			.otherwise({ redirectTo: '/view1' });

		$locationProvider.html5Mode(true);
	}
})();

