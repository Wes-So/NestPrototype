var loginModule = angular.module('Nest.Login',[]);	

loginModule.controller('LoginCtrl',
	function(){
		var login = this;
		login.text = "wes so";
		
		login.submitForm = function(){
			if(this.user == 'oracle' && this.password == 'Welcome1'){
				alert("Login successful");
				login.userName=this.user;
				window.location = "#/soaservices";
			} else {
				alert("Login unsuccessful");
			}
			
			 
		}
		
	});