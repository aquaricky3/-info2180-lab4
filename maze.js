window.onload = function () {
  var border1 = document.getElementById("boundary1");
  border1.addEventListener("mouseover", function turnRed() {
     border1.setAttribute("class", "boundary youlose");
    });
};