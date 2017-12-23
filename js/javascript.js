var buttons = document.getElementsByClassName('content__hide');

function hide(context) {
  context.style.display = "none";
}

function show(context) {
  context.style.display = "block";
}

Array.from(buttons).forEach(function(button) {
  button.addEventListener('click', function() {
    var context = this.nextElementSibling;
    var contextVisible = context.style.display === 'block';

    if (contextVisible) {
      hide(context);

    } else {
      show(context);
    }
  });
});


/* Script: */
$("a").on('click', function(event) {

if (this.hash !== "") {
  event.preventDefault();
  var hash = this.hash;

  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){});
};
});

/* Script: OnTop*/
$(window).scroll(function(){
  scrollFunction();
})

function scrollFunction(){
  if($(document).scrollTop() >20){
    $(".btn_ontop").show();
  }
  else{
    $(".btn_ontop").hide();
  }
}

function scrollToTop() {
  $(document).scrollTop(0);
}

$('.menu__responsive').click(function(){
  $('.menu').toggle();
})
