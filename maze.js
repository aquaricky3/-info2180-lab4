var tracker = false;
window.onload = function () {
  var ending = document.getElementById("end");
  ending.addEventListener("mouseover", endGame);
  var border = document.querySelectorAll("div#maze div.boundary");
  for (var i = 0; i < border.length; i++) {
    border[i].addEventListener("mouseover", turnRed);
  }
};

function turnRed() {
  tracker = true;
  var border = document.querySelectorAll("div#maze div.boundary");
  for (var i = 0; i < border.length; i++) {
    border[i].setAttribute("class", "boundary youlose");
  }
}

function endGame() {
  var s = document.getElementById("status");
  if (tracker === false) {
    s.innerHTML = "You Win!!!";
  }
    else{
      s.innerHTML = "You have lost.";
    }
}