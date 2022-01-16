 
<html ng-app="myApp">
    <head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
    <!-- Sources/dependencies (web and local)-->    
    
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  
 <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>
<script src="nubeliefs_files/app.js"></script>
    <!-- Sources/dependencies (web and local)-->
    </head>

<body>


  <title>non-universal beliefs</title>
  
 
  
<style>

#img{
width:100%;
}

.thumbnail {
    position: relative;
}

.caption {
    position: absolute;
    top: 1%;
    left: 0;
    width: 100%;
}


</style>
<!-- Background image width is 100%-->
<!--thumbnail is text floating over the background image is relative-->


<div class="jumbotron text-center" style="margin-bottom:0">
  <h1>Non-Universal Beliefs</h1>
  <p>follow your imagination</p> 
</div>



<nav class="navbar navbar-expand-sm bg-primary navbar-dark sticky-top" style="margin-bottom:0 ">




<ul class="navbar-nav">

<li class="nav-item active">
<a class="navbar-brand" href="#!" title="Website name">nubeliefs.com</a>
<!-- Toggler/collapsibe Button -->

  <button class="navbar-toggler fixed-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon fixed-right"></span>
  </button>

</li>



<div class="collapse navbar-collapse" id="collapsibleNavbar">

    <li class="nav-item">
      <a class="nav-link" href="#!about_us">About Us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#!random_thoughts">Random Thoughts</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#!dreams_story">Dreams On</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#!youtube_journey">YouTube World</a>
    </li>

</div></ul>

</nav>




<div class="thumbnail">
    <div ng-view></div> 
<img id="img" src="./nubeliefs_files/nubeliefs_bg_1.jpg" class="img-responsive">


    
</div>
</div>





<div id="foot" class="jumbotron jumbotron-fluid text-center bg-secondary text-white" style="margin-bottom:0">

  ©nubeliefs.com | 2019

</div>


</body></html>
