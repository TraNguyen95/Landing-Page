const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu-close");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove(activeClass);
  }
});
menuClose.onclick = function() {
  menu.classList.remove(activeClass);
}

$('.product-slider').slick({
  slidesToShow: 1,
})
$('.partner-wrapper').slick({
  slidesToShow: 5,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
       
        slidesToShow: 2,
      }
    }
  ]
})

$('.service-list .service-item').click(function(){
  $('.service-list .service-item').removeClass("active");
  $(this).addClass("active")
  console.log('oke');
})