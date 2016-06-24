'use strict'

var nestModule = angular.module('Nest',[
    'ngRoute',
    'Nest.Login',
    'Nest.Services'
]);

nestModule.config(['$routeProvider',
    function($routeProvider){
		$routeProvider
		  .when('/',{
			  templateUrl: 'nest/soaservices/tmpl/services.html',
			  controller: 'ServicesCtrl',
			  controllerAs: 'services'
		  })		
		  .when('/login',{
			  templateUrl: 'nest/login/tmpl/login.html',
			  controller: 'LoginCtrl',
			  controllerAs: 'login'
		  })
		  .when('/soaservices',{
			  templateUrl: 'nest/soaservices/tmpl/services.html',
			  controller: 'ServicesCtrl',
			  controllerAs: 'services'
		  })
		  .when('/soaservices/disposition', {
			  templateUrl: 'nest/soaservices/tmpl/disposition.html',
			  controller: 'AccountDispositionCtrl',
			  controllerAs: 'disp'
		  });
}]);