/* global angular */
(function () {
	'use strict';

	angular
		.module('myApp')
		.controller('AppCtrl', ['$scope', 'MyService', AppCtrl]);

	function AppCtrl($scope, MyService) {
		var self = this;

		MyService.getAppNameAsync()
			.then(function (appName) {
				self.name = appName;
			}, function () {
				self.name = 'Error!';
			});
	}

})();