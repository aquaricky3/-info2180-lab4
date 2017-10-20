var tracker = false;
window.onload = function () {
  var starting = document.getElementById("start");
  starting.addEventListener("click", startGame);
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
  document.addEventListener("mouseleave", function(){
      if (event.clientX < maze.offsetLeft || event.clientY > maze.offsetRight)
      {
        turnRed();
      }
     });
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

function startGame() {
  tracker = false;
  var start = document.querySelectorAll("div#maze div.boundary");
  for (var i = 0; i < start.length; i++){
  start[i].setAttribute("class", "boundary");
 }
 var k = document.getElementById("status");
 k.innerHTML = "Move your mouse over the S to begin.";
}

function turnRed2() {
  tracker = true;
  var border = document.querySelectorAll("div#maze div.boundary");
  if (event.clientX < start.offsetLeft)
      {
        turnRed();
      }
  for (var i = 0; i < border.length; i++) {
    border[i].setAttribute("class", "boundary youlose");
  }
}