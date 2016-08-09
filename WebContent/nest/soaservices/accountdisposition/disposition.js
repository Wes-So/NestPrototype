var acctDispositionModule = angular.module('Nest.AccountDisposition',['ngResource','Nest.Logging']);

acctDispositionModule.factory('AccountDispositionSvc',['$resource',
function($resource){
	return $resource("http://el01cn06:8002/AccountOSBRest/ProxyServices/AccountDisposition", {},{
		save: {method: 'POST', cache: false, isArray: false},
	});
}]); 

acctDispositionModule.value('DISPOSITIONS',[
  {code: 'BPRM'},
  {code: 'FRAN-PND'},
  {code: 'FRAN-ACPT'},
  {code: 'FRAN-REJ'},
  {code: 'EODIS'},
  {code: 'GOOD'},
  {code: 'LNBZ'},
  {code: 'NBIZ'},
  {code: 'SKP'},
  {code: 'HOT'},
  {code: 'PROM'},
  {code: 'STL-EXP'},
  {code: 'STL-REQF'},
  {code: 'STL'},
  {code: 'STL-REQC'},
  {code: 'UTL'},
  {code: 'LSC'},
  {code: 'LSC-RDY'}
]);
                                                	
acctDispositionModule.controller('AccountDispositionCtrl', ['AccountDispositionSvc','DISPOSITIONS','LogServiceCall',                                                         
   function(AccountDispositionSvc,DISPOSITIONS,LogServiceCall){	
	  var disp = this; 
	  disp.svc = AccountDispositionSvc;
	  disp.text=  "Account Disposition Page";
	  disp.dispCodes = DISPOSITIONS;
	  disp.operation='ADD'; 
	  
	  
	  disp.process = function(){
	  		var data = "accountId=" + disp.accountId 
	  					+ "&disposition=" 
	  					+ disp.selectedDisposition.code 
	  					+ "&operation=" + disp.operation 
	  					+ "&userName=NestUser";	
	  		 
	  		LogServiceCall.log(data);
	  		 
	  }	    
}]);


//TODO: uncomment when running
//disp.svc.save({data: data},		
		
//function success(response){
//	//console.log("Success:" + JSON.stringify(response));
//	disp.postEntries = response;
//},
//function error(errorResponse) {
//	alert("Error happened");
//	console.log("Error happened");
//	
//	//console.log("Error:" + JSON.stringfy(errorResponse));
//}
//);	 
