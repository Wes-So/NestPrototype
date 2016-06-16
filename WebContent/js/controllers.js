'use strict'

var nestControllers = angular.module('nestControllers',[]);

nestControllers.controller('NestCtrl',['$scope',
function NestCtrl($scope){
	$scope.welcomeBanner = "Welcome to the N.E.S.T"
	$scope.welcomeText=
		"This is the home page for the N.E.S.T. customer service interface that will allow you to " +
		"provide high quality support to our current eAgle users. " +
		"When you log in to N.E.S.T., you will be able to perform services in different functional areas such as: ";
}]);
 

 
 