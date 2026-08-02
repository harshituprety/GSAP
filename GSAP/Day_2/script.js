let tl = gsap.timeline();

tl.to("#box1", {
  x: 1200,
  rotate: 360,
  scale: 0.5,
  duration: 3,
  delay: 1,
})
  .to("#box2", {
    x: 1200,
    rotate: 360,
    scale: 0.5,
    duration: 3,
    delay: 1,
  })
  .to("#box3", {
    x: 1200,
    rotate: 360,
    scale: 0.5,
    duration: 3,
    delay: 1,
  });
