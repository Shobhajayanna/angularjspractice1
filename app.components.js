var myapp=angular.module('myapp');
myapp.component('studentDetails',{
    templateUrl :'student.tpl.html',
    bindings:{
    myTitle:'@',
     currentStudent:'<'
    },
    controller:[function(){
        this.myname='custom component';
    }]
});

myapp.component('homePage',{
    template: '<div> this is the homepage of component</div>'
});

myapp.component('aboutPage',{
    template: '<div> this is the aboutPage of component</div>'
});