// controller practise session
angular.module('myApp',[]).
controller('spicyController', ['$scope', 'notify', function($scope,notify){
	
      $scope.callNotify = function(msg) {
     notify(msg);
   };
 }]).
factory('notify', ['$window', function($window) {
   var msgs = [];
   return function(msg) {
     msgs.push(msg);
     if (msgs.length == 3) {
       $window.alert(msgs.join("\n"));
       msgs = [];
     }
   };
 }]);


/*
myApp.controller('spicyController', ['$scope', function($scope){
	$scope.chiliSpicy = function (){ window.alert ("Chili!!")};

	$scope.jalapenoSpicy = function () { window.alert("Jalapeno!!")};
	$scope.recipient = 'Nikki';
}]);

myApp.controller('firstinner', ['$scope', function($scope){
	$scope.recipient = 'Jikki';
	
}]);

myApp.controller('secondinner', ['$scope', function($scope){
	$scope.recipient = 'Tikki';
}]);*/