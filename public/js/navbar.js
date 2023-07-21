// active navbar
let menuList = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuList.forEach((sec) => sec.classList.remove("active"));
  menuList[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// toggle icon navbar for media query
let menuIcon = document.querySelector("#menu");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
};
