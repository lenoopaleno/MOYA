/* Menu Toggle */
$(function() {

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
backToTopButton.addEventListener("click", goToTop)

  $("#send").click(function(){
    $.ajax({
      url: "php/form.php",
      method: "POST",
      dataType: "json",
      data: {
        user: $( "input[name='inputName']" ).val(),
        mail: $( "input[name='inputMail']" ).val(),
        checkbox: $( "input[name='regulamin']" ).is(":checked"),
      },
      error: function(){alert("Wystąpił błąd")},
      success: function(a, b){
        if (a.wynik == "OK") {
          alert("ez");
        }
        else if (a.wynik == "error") {
          if (typeof a.errors.e_name != "undefined"){
           document.getElementById("dialog-error1").style.display="";
           $('#dialog-error1').empty().append(a.errors.e_name);
         } else{
           document.getElementById("dialog-error1").style.display="none";
         }
          if (typeof a.errors.e_mail != "undefined"){
           document.getElementById("dialog-error2").style.display="";
           $('#dialog-error2').empty().append(a.errors.e_mail);
         } else{
           document.getElementById("dialog-error2").style.display="none";
         }
          if (typeof a.errors.e_regulamin != "undefined"){
           document.getElementById("dialog-error3").style.display="";
           $('#dialog-error3').empty().append(a.errors.e_regulamin);
         } else{
           document.getElementById("dialog-error3").style.display="none";
         }
        }
      }
    });
  });
});
