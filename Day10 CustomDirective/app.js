var app = angular.module('myApp', []);

app.controller('myController', ['$scope', 'myService', function($scope, myService){
   myService.getEmployees(function(r){
       $scope.employees = r;
   });
}]);

app.service('myService', ['$http','$log', function($http, $log){
    this.getEmployees = function(cb){
        $http({
            url: 'http://localhost:3000/api/employees',
            method: 'GET'
        }).then(function(response){
            $log.log(response.data);
          // cb(response.data);
        },function(response){
            $log.error("Error Occurred");
        });
    };
}]);


app.directive('myDirective', function(){
    return{
        templateUrl: 'employeeDetails.html'
    }
});