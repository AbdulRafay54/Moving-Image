document.addEventListener("DOMContentLoaded", function () {
  const img = document.getElementById("movable");
  const step = 10;

  document.addEventListener("keydown", function (event) {
    const top = parseInt(window.getComputedStyle(img).top);
    const left = parseInt(window.getComputedStyle(img).left);

    if (event.key == "ArrowUp") {
      img.style.top = `${top - step}px`;
    } else if (event.key == "ArrowDown") {
      img.style.top = `${top + step}px`;
    }
  });
});
