angular.module('controllers')
.controller('UpdateCtrl', function($scope, $location, addressBook) {
  $scope.updatePerson = function () {
  	//addressBook.update($scope.personOjb);
  	$location.path('/');
  }
});