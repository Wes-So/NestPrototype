var loginModule = angular.module('Nest.Login',[]);	

loginModule.controller('LoginCtrl',
	function(){
		var login = this;
		login.text = "wes so";
		
		login.submitForm = function(data){
			alert("Service Call successful:" + data);  
		} 
	});