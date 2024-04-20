gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".loading-text",
  {
    y: 80,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);

const loaderContainer = document.querySelector(".loading-page");

// removing the loading page from dom after complete loading
loaderContainer.addEventListener("transitionend", () => {
  document.body.removeChild(loaderContainer);
});
