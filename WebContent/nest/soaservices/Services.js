var servicesModule = angular.module('Nest.Services',['ngResource']);

servicesModule.controller('ServicesCtrl',
	function(){
		var services = this;
		services.text = "Welcome to the SOA11G Services page"; 
		
		services.processDisposition = function(AccountDispositionSvc){
			alert("Service Call successful");
			AccountDispositionSvc.get({},
				      function success(response){
						console.log("Success:" + JSON.stringify(response));
						services.postEntries = response;
					  },
					  function error(errorResponse) {
						console.log("Error:" + JSON.stringfy(errorResponse));
					  }
					);
		};
		
	});


servicesModule.factory('AccountDispositionSvc',['$resource',
    function($resource){
    	return $resource("http://jsonplaceholder.typicode.com/posts", {},{
    		get: {method: 'GET', cache: false, isArray: true}
    	});
}]); 
                                                	
                                                	
servicesModule.controller('AccountDispositionCtrl',
   function(){	
	  var disp = this;
	  disp.text=  "Account Disposition Page";
	  disp.process = function(AccountDispositionSvc){		  
			alert("Service Call successful");
			AccountDispositionSvc.get({},
			function success(response){
				console.log("Success:" + JSON.stringify(response));
				$scope.postEntries = response;
			},
			function error(errorResponse) {
				console.log("Error:" + JSON.stringfy(errorResponse));
			}
			);	
	  }	
		   
});


//AccountDispositionSvc.get({},
//function success(response){
//	console.log("Success:" + JSON.stringify(response));
//	$scope.postEntries = response;
//},
//function error(errorResponse) {
//	console.log("Error:" + JSON.stringfy(errorResponse));
//}
//);	



 