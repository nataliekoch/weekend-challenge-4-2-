var app = angular.module('userApp', []);
var gitHubUsername = 'nataliekoch';

app.controller('mainController', ['$scope', 'APIservices', function ($scope, APIservices) {
  $scope.github = APIservices.data;
  APIservices.callIt();
}]);

app.factory('APIservices', ['$http', function($http){

  var githubData = {};

  var callIt = function(){
    $http.jsonp('https://api.github.com/users/' + gitHubUsername + '/events?callback=JSON_CALLBACK').then(function(response){
        githubData.data = response.data.data;
        console.log(response.data.data);
    });
  };

  return {
    callIt: callIt,
    data: githubData
  };

}]);
