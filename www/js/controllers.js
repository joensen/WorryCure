angular.module('worrycure.controllers', [])

.controller('StrategivelgerCtrl', function($scope, $stateParams, WorryCureService) {
  	$scope.question = WorryCureService.get($stateParams.questionId);
})

.controller('StrategierCtrl', function($scope) {
	$scope.browser = function(resource) {
		cordova.InAppBrowser.open(resource, '_blank', 'location=no,hardwareback=no,closebuttoncaption=Luk,enableViewportScale=yes');
	};
})

.controller('AppenCtrl', function($scope) {
  
})

.controller('KursetCtrl', function($scope) {
  
});