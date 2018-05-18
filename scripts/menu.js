window.onscroll = function() {myFunction()};

var menu1 = document.getElementById("menu1");
var espacioScroll = document.getElementById("espacioScroll");
var sticky = menu1.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    menu1.style.fontSize="14px";
    menu1.style.height="32px"; 
    menu1.style.paddingBottom="30px";
    espacioScroll.style.paddingTop=("50px");
    espacioScroll.style.paddingBottom=("15px");
    /*
    espacioScroll.style.width=("100%");*/
    /*
    menu1.style.fontWeight="100";    
    menu1.style.borderBottom="solid 2px gray";
    document.getElementById("logo").style.width="130px";*/
    menu1.classList.add("sticky");    
  } else {
    espacioScroll.style.paddingTop=("0px");
    espacioScroll.style.paddingBottom=("0px");
    menu1.classList.remove("sticky");
    menu1.style.fontSize="16px";
    menu1.style.height="72px";
    menu1.style.paddingBottom="0px";
    /*
    menu1.style.alignItems="center";
    document.getElementById("pago-en-linea").style.paddingBottom="0px";
    document.getElementById("menu1").style.borderBottom="solid 2px gray";
    document.getElementById("menu1").style.paddingBottom="0px";
    document.getElementById("logo").style.width="150px";*/
  }
}
