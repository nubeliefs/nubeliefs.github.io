var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "nubeliefs_pages/main.html"
    })
    
    .when("/contact_us", {
        templateUrl : "nubeliefs_pages/contact_us.html"
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

//Microsoft Clarity - Google Analytics
(function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "adpinvtq7u");

//Global site tag (gtag.js) - Google Analytics
window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-F96R1MZMEQ');

//scroll top JS

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
        


