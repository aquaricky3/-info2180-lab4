window.onload = function () {
  var border = document.querySelectorAll("div#maze div.boundary");
  for (var i = 0; i < border.length; i++) {
    border[i].addEventListener("mouseover", turnRed);
  }
};

function turnRed() {
  var border = document.querySelectorAll("div#maze div.boundary");
  for (var i = 0; i < border.length; i++) {
    border[i].setAttribute("class", "boundary youlose");
  }
}