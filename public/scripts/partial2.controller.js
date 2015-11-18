/* global angular */
(function () {
	'use strict';

	angular
		.module('myApp')
		.controller('MyCtrl2', ['$scope', MyCtrl2]);

	function MyCtrl2($scope) {
		this.viewDescr = 'View 2';
	}

})();
