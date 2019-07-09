function Selected(x) {
  x.style.height = "100%";
  x.style.width = "91%";
}

function unSelected(x) {
  x.style.height = "100%";
  x.style.width = "360px";
}


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function Selected_2(x) {
  x.style.height = "50px";
  x.style.width = "150px";



}

function unSelected_2(x) {
  x.style.height = "50px";
  x.style.width = "70px";
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
