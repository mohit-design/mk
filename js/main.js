$(function() {
  // Hamburger Menu and Mobile Menu JS
  $(".burger-menu").click(function() {
    $(this).toggleClass("active");
    $("body").toggleClass("active");
    $(".fixed-mega-menu").toggleClass("active");
    $(".menu-listing-desktop").toggleClass("active");
  });
  // AOS Animation JS
  AOS.init({
    easing: 'ease-in-out-sine'
  });
});