window.onscroll = function() {myFunction()};

var menu1 = document.getElementById("menu1");

var sticky = menu1.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    menu1.classList.add("sticky")
  } else {
    menu1.classList.remove("sticky");
  }
}