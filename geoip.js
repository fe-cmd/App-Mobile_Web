function geoip_country_name() { return 'Bangladesh'; }
function geoip_city()         { return 'Dhaka'; }
function geoip_region()       { return '81'; }
function geoip_region_name()  { return 'Dhaka'; }
function geoip_latitude()     { return '23.7231'; }
function geoip_longitude()    { return '90.4086'; }
function geoip_postal_code()  { return ''; }
function geoip_area_code()    { return ''; }
function geoip_metro_code()   { return ''; }

$(document).ready(function(){
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#FFFFFF');
   }, 26000);
 
});


//Get the button:
mybutton = document.getElementById("myBtn");

myclick = document.getElementById("click1");

myhand = document.getElementById("hand");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
    myclick.style.display = "block";
    myhand.style.display = "block";
  } else {
    mybutton.style.display = "none";
    myclick.style.display = "none";
    myhand.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
