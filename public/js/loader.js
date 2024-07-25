// Disable scrolling
disableScroll();

let tl = gsap.timeline();

tl.fromTo(
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

    // reset normal scroll after page load
    enableScroll();
  });
});

// ***************************************** NAVBAR  *********************************************
tl.from(".logo", {
  y: -90,
  opacity: 0,
  duration: 1,
  delay: 1,
  rotate: 220,
  // repeat: 2,
  // yoyo: true,
});

tl.from(".navlist li", {
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

// ***************************************** Home *********************************************

tl.from(".btn-box", {
  y: 30,
  opacity: 0,
  duration: 1.5,
});

// Function to prevent scrolling while loading
function disableScroll() {
  // Get the current page scroll position
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  // Disable scrolling by setting the onscroll event handler
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = null;
}
