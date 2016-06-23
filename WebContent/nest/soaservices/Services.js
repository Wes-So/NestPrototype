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


//servicesModule.factory('AccountDispositionSvc',['$resource',
//    function($resource){
//    	return $resource("http://jsonplaceholder.typicode.com/posts", {},{
//    		save: {method: 'POST', cache: false, isArray: false},
//    	});
//}]); 
     

servicesModule.factory('AccountDispositionSvc',['$resource',
function($resource){
	return $resource("http://el01cn06:8002/AccountOSBRest/ProxyServices/AccountDisposition", {},{
		save: {method: 'POST', cache: false, isArray: false},
	});
}]); 

                                                	
servicesModule.controller('AccountDispositionCtrl',
   function(AccountDispositionSvc){	
	  var disp = this;
	  disp.svc = AccountDispositionSvc;
	  disp.text=  "Account Disposition Page";
	  disp.operation='Add';
	  
	  disp.process = function(){		  
			alert("Service Call successful");
			var data = "accountId=" + disp.accountId + "&disposition=" + disp.dispositionCode + "&operation=REM" + "&userName=NestUser";			
			disp.svc.save({data: data},
			
					
		   function success(response){
				//console.log("Success:" + JSON.stringify(response));
				disp.postEntries = response;
			},
			function error(errorResponse) {
				alert("Error happened");
				console.log("Error happened");
				
				//console.log("Error:" + JSON.stringfy(errorResponse));
			}
			);	
	  }	
		   
});


 



 