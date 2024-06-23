new Swiper("#swiper-1", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function readMore() {
  let elem = document.getElementById("more");
  let style = getComputedStyle(elem);
  if (style.height === "170px") {
    document.getElementById("more").style.height = "340px";
    btn.innerHTML = "Скрыть";
    document.getElementById("show").style.display = "none";
    document.getElementById("hide").style.display = "inline-block";
  } else if (style.height !== "170px") {
    document.getElementById("more").style.height = "170px";
    btn.innerHTML = "Показать все";
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "inline-block";
  }
}
