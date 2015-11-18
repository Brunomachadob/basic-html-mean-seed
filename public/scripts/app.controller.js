/* global angular */
(function () {
	'use strict';

	angular
		.module('myApp')
		.controller('AppCtrl', ['$scope', '$http', AppCtrl]);

	function AppCtrl($scope, $http) {
		var self = this;
		
		$http({ method: 'GET', url: '/api/name' })
			.success(function (data, status, headers, config) {
				self.name = data.name;
			})
			.error(function (data, status, headers, config) {
				self.name = 'Error!';
			});
	}

})();
