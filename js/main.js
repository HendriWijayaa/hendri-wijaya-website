// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".navbar-burger");
  const navLists = document.querySelector(".navbar-menu");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("navbar-active");
    burger.classList.toggle("burger-active");
  });
};

navSlide();

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
