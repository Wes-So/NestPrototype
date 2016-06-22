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
    		get: {method: 'GET', cache: false, isArray: true},
    		save: {method: 'POST', cache: false, isArray: false},
    	});
}]); 
                                                	
                                                	
servicesModule.controller('AccountDispositionCtrl',
   function(AccountDispositionSvc){	
	  var disp = this;
	  disp.svc = AccountDispositionSvc;
	  disp.text=  "Account Disposition Page";
	  disp.process = function(){		  
			alert("Service Call successful");
			var data = "id=" + disp.accountId + "&title=" + disp.dispositionCode + "&userId=1";
			disp.svc.save({data: data},
			function success(response){
				console.log("Success:" + JSON.stringify(response));
				disp.postEntries = response;
			},
			function error(errorResponse) {
				console.log("Error:" + JSON.stringfy(errorResponse));
			}
			);	
	  }	
		   
});


 



 