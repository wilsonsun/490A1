angular.module('controllers')
.controller('UpdateCtrl', function($scope, $location, addressBook) {
  var id = $location.path().split(":")[1];
  $scope.personOjb = addressBook.findById(id);

  $scope.updatePerson = function () {
  	addressBook.update($scope.personOjb);
  	$location.path('/');
  }
});