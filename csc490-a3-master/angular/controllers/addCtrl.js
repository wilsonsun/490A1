angular.module('controllers')
.controller('AddCtrl', function($scope, $location, addressBook) {
  $scope.addPerson = function () {
  	addressBook.add($scope.personOjb);
  	$location.path('/');
  }
});