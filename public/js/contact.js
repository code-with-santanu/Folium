gsap.from("form div", {
  y: 60,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "form div",
    scroller: "body",
    // markers: true, // dev tools
    start: "top 65%",
    end: "top 30%",
    scrub: 4,
  },
});
