/* Menu Toggle */

$(document).ready(function(){
   $("#toggler").click(function(){
     $("#toggle-nav").fadeToggle(500);
   });
 });

 $('.menu-toggle').on('click', function() {
   $('.wrapper').toggleClass('menu--is-revealed');
 });

 /* Half Page Responsive */

 $(document).ready(function($) {
   var alterClass = function() {
     var ww = document.body.clientWidth;
     if (ww < 1199) {
       $('.LeftContent ').removeClass('LeftContent');
       $('.RightContent ').removeClass('RightContent');
     } else if (ww >= 1200) {
       $('.LeftContent').addClass('LeftContent');
       $('.RightContent ').addClass('RightContent');
     };
   };
 });
/* Back to top hidden button*/
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})
const goToTop = () => {
  document.body.scrollIntoView({behavior: "smooth"});
};
//backToTopButton.addEventListener("click", goToTop)

$('#send').click(function(){
  $.ajax({
    url: "http://localhost/skrypty/kalendarz/form.php",
    method: "POST",
    dataType: "json",
    data: {
      user: $( "input[name='inputName']" ).val(),
      mail: $( "input[name='inputMail']" ).val(),
      checkbox: $( "input[name='regulamin']" ).val(),
    },
    error: function(){alert("Wystąpił błąd")},
    success: function(a, b){
      if (a.wynik == "OK") {
        alert("ez");
    }
    });
});
