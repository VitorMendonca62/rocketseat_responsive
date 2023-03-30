document.querySelector(".hamburger").addEventListener("click", () => {
  const classMenu = document.querySelector(".menu").classList;
  classMenu.toggle("menu-active");
  document.body.style.overflow = classMenu.contains("menu-active")
    ? "hidden"
    : "initial";
});