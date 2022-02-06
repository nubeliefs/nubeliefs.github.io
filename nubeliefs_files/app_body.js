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

//loader
var preloader = document.getElementById("loading");

function myFunction() {
    preloader.style.display = 'none';
    preloader.setAttribute("class", "invisible");
};


<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-6648703846558946"
     data-ad-slot="1599635518"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
     
     (adsbygoogle = window.adsbygoogle || []).push({});




        


