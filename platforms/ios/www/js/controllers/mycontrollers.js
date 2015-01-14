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


