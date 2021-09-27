
angular.module("myApp",["mds","ui.router"])
.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state("app",{
        url:"/app",
        views:{
            main:{
                templateUrl:"templates/main.html",
                controller:"appCtrl"
            }
        }
    })
    .state("app.home",{
        url:"/home",
        views:{
            sub:{
                templateUrl:"templates/home.html",
                controller:"homeCtrl"
            }
        }
    })
    .state("app.desktopCoursePage",{
        url:"/desktopCoursePage",
        views:{
            sub:{
                templateUrl:"templates/desktopCoursePage.html",
                controller:"desktopCtrl"
            }
        }
    })
    .state("app.mobleCoursesPage",{
        url:"/mobleCoursesPage",
            views:{
                sub:{
                    templateUrl:"templates/mobleCoursesPage.html",
                    controller:"mobleCoursesCtrl"
                }
            }
        
    })
    .state("app.webCoursesPage",{
        url:"/webCoursesPage",
            views:{
                sub:{
                    templateUrl:"templates/webCoursesPage.html",
                    controller:"webCoursesCtrl"
                }
            }
        
    })
   $urlRouterProvider.otherwise("/app/home")
    })


