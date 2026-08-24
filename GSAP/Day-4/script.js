gsap.from("#part-1 #circle", {
  scale: 0,
  rotation: 720,
  duration: 3,
});
gsap.from("#part-2 #circle", {
  scale: 0,
  rotation: 720,
  duration: 3,
});
gsap.from("#part-3 #circle", {
  scale: 0,
  rotation: 720,
  duration: 3,
  scrollTrigger: {
    scroller: "body",
    trigger: "#part-3 #circle",
    markers: true,
    scrub: 2,
    start: "top 60%",
    end: "top 30%",
  },
});
