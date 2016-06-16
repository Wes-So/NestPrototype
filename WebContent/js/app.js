/**
 * 
 */

'use strict'

var nestApp = angular.module('nestApp',[
    'ngRoute',     
    'nestControllers'
]);

nestApp.config(['$routeProvider',
    function($routeProvider){
		$routeProvider.
		  when('/',{
			  templateUrl: 'partials/main.html',
			  controller: 'NestCtrl'
		  });
}]);