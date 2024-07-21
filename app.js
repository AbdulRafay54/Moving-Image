document.addEventListener("DOMContentLoaded", function () {
  const img = document.getElementById("movable");
  const step = 10;

  document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowUp") {
      img.style.top ;
    }
  });
});
