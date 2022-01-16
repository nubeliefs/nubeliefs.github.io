var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "nubeliefs_pages/main.html"
    })
    
    .when("/about_us", {
        templateUrl : "nubeliefs_pages/about_us.html"
    })
    
    .when("/random_thoughts", {
        templateUrl : "nubeliefs_pages/random_thoughts.html"
    })
    .when("/dreams_story", {
        templateUrl : "nubeliefs_pages/dreams_story.html"
    })
    
    .when("/youtube_journey", {
        templateUrl : "nubeliefs_pages/youtube_journey.html"
    })
    ;
});
