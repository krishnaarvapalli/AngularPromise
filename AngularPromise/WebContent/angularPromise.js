angular.module('myModule', [])

  .factory('HelloWorld', function($q, $timeout) {
  
    var getMessages = function() {
      var deferred = $q.defer();
  
      $timeout(function() {
        deferred.resolve(['Hello..']);
      }, 2000);
  
      return deferred.promise;
    };
     
     var getMessage = function() {
      var deferre = $q.defer();
  
      $timeout(function() {
        deferre.resolve(['Welcome']);
      }, 4000);
  
      return deferre.promise;
    };
     var getMessagess = function() {
      var deferr = $q.defer();
  
      $timeout(function() {
        deferr.resolve(['E-Giants...!!']);
      }, 6000);
  
      return deferr.promise;
    };
    return {
      getMessages: getMessages,
      getMessage: getMessage,
      getMessagess: getMessagess
    };
  
  })
  .controller('HelloCtrl', function($scope, HelloWorld) {
  
    $scope.messages = HelloWorld.getMessages();
    $scope.messag = HelloWorld.getMessage();
    $scope.messa = HelloWorld.getMessagess();
  });