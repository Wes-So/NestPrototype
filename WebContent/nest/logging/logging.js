var loggingModule = angular.module('Nest.Logging',['ngResource']);

loggingModule.factory('SmartLoggingSvc',['$resource',
function($resource){
	return $resource("http://jsonplaceholder.typicode.com/posts", {},{
		save: {method: 'POST', cache: false, isArray: false},
    });
}]); 




loggingModule.factory('LogServiceCall',function(SmartLoggingSvc){ 
	return{
		log: function(data){ 
			console.log("Logging service called " + data);
			 
			
			SmartLoggingSvc.save({data: data},		
			
			function success(response){
				console.log("Success:" + JSON.stringify(response));				
			},
			function error(errorResponse) { 
				console.log("Error:" + JSON.stringfy(errorResponse));
			}
			);	 
			
		}
	}
 });


