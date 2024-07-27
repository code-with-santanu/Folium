const sktl = gsap.timeline();

sktl.from(".skill-left", {
  x: -100,
  opacity: 0,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".skill-left ",
    scroller: "body",
    // markers: true, // dev tools
    start: "top 80%",
    end: "top 30%",
    scrub: 4,
  },
});

gsap.from(".skill-right .skill-right-sub", {
  y: 60,
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".skill-right .skill-right-sub",
    scroller: "body",
    // markers: true, // dev tools
    start: "top 80%",
    end: "top 30%",
    scrub: 4,
  },
});
