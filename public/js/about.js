// function setVisibility(id, visibility) {
//   document.getElementById(id).style.display = visibility;
//   document.getElementById(id).style.transitionDuration = 2;
// }

// Func to open the read-more content
function viewRM() {
  abtl.restart();
  console.log("abtl played");
}

// Func to close the read-more content
function hideRM() {
  abtl.reverse();
  console.log("abtl reversed");
}
/* ------------------GSAP ANIMATION------------------ */
gsap.from(".about-content p span", {
  y: 10,
  opacity: 0,
  stagger: 0.8,
  scrollTrigger: {
    trigger: ".about-content p",
    scroller: "body",
    // markers: true, // dev tools
    start: "top 60%",
    end: "top 26%",
    scrub: 4,
  },
});

// read-more animation starts here
const abtl = gsap.timeline();
abtl.pause();

abtl.to(".read-more", {
  display: "flex",
  zIndex: 10001,
  duration: 0.5,
  opacity: 1,
});

abtl.from(".read-more #block1 #sub1", {
  x: -200,
  opacity: 0,
  delay: 0.2,
  duration: 0.2,
});

abtl.from(".read-more #block1 #sub2", {
  y: 100,
  opacity: 0,
  delay: 0.1,
  duration: 0.3,
});

abtl.from(".read-more #block2 #sub1", {
  x: 200,
  opacity: 0,
  delay: 0.2,
  duration: 0.2,
});

abtl.from(".read-more #block2 #sub2", {
  y: 200,
  opacity: 0,
  delay: 0.1,
  duration: 0.3,
});

abtl.from(".read-more #block3 #sub1", {
  x: -200,
  opacity: 0,
  delay: 0.2,
  duration: 0.2,
});

abtl.from(".read-more #block3 #sub2", {
  y: 200,
  opacity: 0,
  delay: 0.1,
  duration: 0.3,
});
