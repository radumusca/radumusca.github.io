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
function scrollTop(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
    document.getElementById('btn_ontop').style.display="block";
  }
  else{
    document.getElementById('btn_ontop').style.display="none";
  }
}
