'use strict';

/* jasmine specs for controllers go here */
describe('ContactManager controllers', function() {

  describe('mycontroller', function(){
    var $scope, $window,saveContacts;
  
    beforeEach(module('mymodule'));

   // savecontrolobject= $injector.get('saveContacts');

    beforeEach(inject(function($rootScope,_$window_,_saveContacts_,$controller){
      $scope = $rootScope.$new();
      $window = _$window_;//.$new();
      saveContacts = _saveContacts_;//.$get();

      $controller('mycontroller', {
        $scope:$scope,
        $window : $window,
        saveContacts : saveContacts

      });

    }));

    it('should create contact first name with default value', function() {
      // var scope = {},
	     //  windowp = {},
	     //  savecontrolobject = {},
      //     ctrl = $controller('mycontroller', {$scope:scope,$window:windowp,saveContacts:savecontrolobject});

      expect($scope.contact.firstname).toBe("Arun");
    });

  });
});
