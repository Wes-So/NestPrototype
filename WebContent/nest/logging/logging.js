var loggingModule = angular.module('Nest.Logging',[]);


loggingModule.factory('LogServiceCall',function(){ 
	return{
		log: function(data){ 
			console.log("Logging service called " + data);
		}
	}
 });


