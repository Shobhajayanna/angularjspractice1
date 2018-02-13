var myapp = angular.module('myapp',[]);
myapp.controller('MyCtrl',['$scope','AppService',function($scope,AppService){
   
   
  AppService.getstudents().then(function(result){
        $scope.students=result;
    });
       
     $scope.onViewBtnClick=function(student){
         $scope.selectedStudent=student;
     };
      
   $scope.onBtnClick=function(event){
       console.log(event.target);       
   }
}
]);
