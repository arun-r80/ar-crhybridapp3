// controller practise session
var mymodule = angular.module('mymodule', []);
/**
*  Module
*  Module contains mycontroller. 
* Description
*/
mymodule.controller('mycontroller',['$scope','$window','saveContacts',function($scope,$window,saveContacts){
  //define greeting message;
  $scope.contact = {};
  
  /*Create save function to test data save*/
  $scope.save = function (contact){
    saveContacts(contact);
  };
  
}]);

var AR_NAME_REGEXP = /[a-z]/i;

mymodule.directive('arname',  function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {ardirective:'=ngModel'},
    //{}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    require: 'ngModel',
    // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'AEC', 
    // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    // templateUrl: '',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, ctrl) {
      

        ctrl.$validators.arname = function(modelvalue, viewvalue){
          if(ctrl.$isEmpty(modelvalue)) {return true;}
          
          if (AR_NAME_REGEXP.test(viewvalue) ) {return true;}
          return false;
        };
    
  }
};
});

mymodule.factory('saveContacts', ['$window', function($window){
  
  return function (contact){
    // Call back function for Save Success
    function onSuccess(contact) {
      $window.alert("Save Success");
    }
    // Call back function for Save failure
    function onError(contactError) {
      $window.alert("Error = " + contactError.code);
    }
    //create contact object
    // create contact name
    var newcontactname = new ContactName();
    newcontactname.givenName = contact.firstname;
    newcontactname.familyName = contact.lastname;
    
    // create contact number
    var newcontactnumber = new ContactField ('mobile',contact.usernumber,false);
    var newphonenumbers = [];
    newphonenumbers[0] = newcontactnumber;

    try {
      var newcontact = navigator.contacts.create();
      newcontact.name = newcontactname;
      newcontact.phoneNumbers = newphonenumbers;
    }
    catch(err) { $window.alert( err );}
    // Save contact
    newcontact.save(onSuccess,onError);
 };

}]);


