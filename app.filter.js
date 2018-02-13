var myapp=angular.module('myapp');
myapp.filter('customName',[function(){
return function(value,greetings){console.log(greetings);
    return greetings+ value.substr(0,2).toUpperCase()+value.substr(2);
}
}]);