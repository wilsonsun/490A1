var app = angular.module('AddressBook', ['ngRoute', 'controllers', 'services']);

app.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl : 'templates/home.html',
        controller : 'HomeCtrl',
        controllerAs : 'home'
      })
      .when('/add', {
        templateUrl : 'templates/form.html',
        controller : 'AddCtrl',
        controllerAs : 'add'
      })
      .when('/update/:id', {
        templateUrl : 'templates/form.html',
        controller : 'UpdateCtrl',
        controllerAs : 'update'
      })
      .otherwise('/');
  }
]);