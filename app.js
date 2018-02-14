var myapp = angular.module('myapp',['ui.router']);

myapp.config(['$stateProvider','$urlRouterProvider',
function($stateProvider,$urlRouterProvider)
{
    // $stateProvider.state({
    //     name: 'home',
    //     url: '/home',
    //     template:'<div> this is the home page</div>'

    // });
    // $stateProvider.state({
    //     name: 'about',
    //     url: '/about',
    //     template:'<div> this is the about page</div>'
    // });

    $urlRouterProvider.otherwise('/home');
     $stateProvider.state({
        name: 'home',
        url: '/home',
        component:'<div> this is the home page</div>'

    });
    $stateProvider.state({
        name: 'about',
        url: '/about',
        component:'<div> this is the about page</div>'
    });

    $urlRouterProvider.otherwise('/home');
}]);
myapp.controller('MyCtrl',['$scope','AppService',function($scope,AppService){
   
   
  AppService.getstudents().then(function(result){
        $scope.students=result;
    });
       
     $scope.onViewBtnClick=function(student){
         $scope.selectedStudent=student;
     };
      
     $scope.viewDetails=function(stu)
     {
         $scope.myVals=stu;
     }
   $scope.onBtnClick=function(event){
       console.log(event.target);       
   }
}
]);
