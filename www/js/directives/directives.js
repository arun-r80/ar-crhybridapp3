var AR_NAME_REGEXP = /^[a-zA-Z]*$/i;

angular.module('mymodule').directive('conname',  function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {ngModel:'='},
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
        
        // Update validator for the directive
        ctrl.$validators.conname = function(modelvalue, viewvalue){
          // Allow null value in the input box
          if(ctrl.$isEmpty(modelvalue)) {return true;}
          // allow only alphabets in the input box
          if (AR_NAME_REGEXP.test(viewvalue) ) {return true;}
          return false;
        };
    
  }
};
});
