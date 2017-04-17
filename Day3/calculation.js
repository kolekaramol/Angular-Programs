 
      var app = angular.module("myApp",[]);
      app.controller("myController", function($scope){
           
        $scope.add = function(){
            $scope.fn;
            $scope.sn;
      $scope.result =$scope.fn+$scope.sn;
        }
        $scope.sub = function(){
          $scope.fn;
          $scope.sn;
     $scope.result =parseInt($scope.fn)-parseInt($scope.sn);
        }
        $scope.mul = function(){
           $scope.fn;
          $scope.sn;
      $scope.result =parseInt($scope.fn)*parseInt($scope.sn);
        }
        $scope.div = function(){
          var firstNumber = $scope.fn;
          var secondNumber = $scope.sn;
       $scope.result =parseInt(firstNumber)/parseInt(secondNumber);
        }           
          });
    