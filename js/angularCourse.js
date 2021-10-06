angular.module("myApp")
    .controller("angularCtrl",function($scope,$rootScope){
        $("html,body").animate({scrollTop:0},0)
        $rootScope.show=1
    })