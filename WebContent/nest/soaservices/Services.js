var servicesModule = angular.module('Nest.Services',['ngResource']);

servicesModule.controller('ServicesCtrl',
	function(){
		var services = this;
		services.text = "SOA11G Services page";   
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

servicesModule.value('DISPOSITIONS',[
  {code: 'LSC'}
]);
                                                	
servicesModule.controller('AccountDispositionCtrl',
   function(AccountDispositionSvc,DISPOSITIONS){	
	  var disp = this; 
	  disp.svc = AccountDispositionSvc;
	  disp.text=  "Account Disposition Page";
	  disp.dispCodes = DISPOSITIONS;
	  disp.operation='ADD';
	  
	  disp.process = function(){		  			
 
	  		var data = "accountId=" + disp.accountId + "&disposition=" + disp.selectedDisposition.code + "&operation=" + disp.operation + "&userName=NestUser";			
			alert("Service Call successful:" + data);
			//TODO: uncomment when running
			//disp.svc.save({data: data},		
					
//		   function success(response){
//				//console.log("Success:" + JSON.stringify(response));
//				disp.postEntries = response;
//			},
//			function error(errorResponse) {
//				alert("Error happened");
//				console.log("Error happened");
//				
//				//console.log("Error:" + JSON.stringfy(errorResponse));
//			}
//			);	 
 
		  
			
	  }	
		   
});


 



 