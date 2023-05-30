const head = document.querySelector(".gpHeader");
head.addEventListener("click", function () {
  this.parentElement.classList.toggle("gpOpen");
});
const cell = document.querySelectorAll(".gpDropper td");

cell.forEach(function (elem) {
  elem.addEventListener("click", function () {
    document.querySelector(".gpSelectedData").innerHTML = this.innerText;
    document.querySelector(".gpSelect").classList.remove("gpOpen");
  });
});
