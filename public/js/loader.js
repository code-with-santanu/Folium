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
