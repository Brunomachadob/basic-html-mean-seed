/* global angular */
(function () {
	'use strict';

	angular
		.module('myApp')
		.controller('MyCtrl1', ['$scope', MyCtrl1]);

	function MyCtrl1($scope) {
		this.viewDescr = 'View 1';
	}

})();
