var myapp=angular.module('myapp');

myapp.service('AppService',['$http','$q',function($http,$q)
    {
    
this.getstudents=function(){
    var defer=$q.defer();
  $http.get('/students.json')
   .then(function(res)
    {   var stu=res.data.map(function(item){
        item.sen=item.age>15?"senior":"junior";
        console.log(item.sen)
        return item;
    });   
                defer.resolve(stu);
        
    });
    return defer.promise;
}

    this.getData=function(){
    var defer=$q.defer();
    setTimeout(function()
     {defer.resolve('hello');
    },1000);
     return defer.promise;
     }}
]);