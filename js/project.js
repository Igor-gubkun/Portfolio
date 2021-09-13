const anchors = document.querySelectorAll('.nav a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
  e.preventDefault()
   
  const blockID = anchor.getAttribute('href').substr(1)
   
  document.getElementById(blockID).scrollIntoView({
  behavior: 'smooth',
  block: 'start'
  })
  })
}



$(document).ready(function () {
  $('.menu_burger_unactive').click(function (event) {
    $('.header').toggleClass('header_active');
    document.body.style.overflow = 'hidden';
  });
});


$(document).ready(function () {
  $('.button_nav,.button').click(function (event) {
    $('.header').toggleClass('header_active');
    document.body.style.overflow = '';
  });
});