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

window.addEventListener("load", () => {
  // hide animation of preloader after complete loading
  gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      duration: 2,
      delay: 2.5,
    }
  );

  // removing the loading page from dom after complete loading animation
  loaderContainer.addEventListener("animationend", () => {
    console.log("Animation ended");
    document.body.removeChild(loaderContainer);
  });
});
