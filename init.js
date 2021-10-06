//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



(function($){

  document.addEventListener('DOMContentLoaded', function() {
     var elems = document.querySelectorAll('.sidenav');
     var instances = M.Sidenav.init(elems, options);
   });
    });




// for Menu
(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


(function($){

    $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

})(jQuery);



// How to use a jQuery function
// (function($){
//
//   Place function here
//
// })(jQuery);
