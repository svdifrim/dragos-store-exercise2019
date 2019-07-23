(function nav() {
  const menuBurger = document.querySelector(".menu-burger");
  const menuLine = document.querySelector(".menu-line");

  menuBurger.addEventListener("click", () => {
    menuLine.classList.toggle("menu-line-close");
  });
})();
