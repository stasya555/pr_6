const link = document.querySelectorAll(".active");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", () => {
    for (let j = 0; j < link.length; j++) {
      link[j].classList.remove("active--active-link");
    }
    link[i].classList.add("active--active-link");
  });
}


const menu = document.getElementById("menu");
const open = document.getElementById("open");
open.addEventListener("click", () => {
    menu.classList.add("aside-active");
});

const close = document.getElementById("close");
close.addEventListener("click", () => {
    menu.classList.remove("aside-active");
});