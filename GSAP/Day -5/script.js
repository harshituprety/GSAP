function breakText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  let splitText = h1Text.split("");
  let cluster = "";

  let halfValue = splitText.length / 2;

  splitText.forEach((e, idx) => {
    if (idx < halfValue) {
      cluster += `<span class="start">${e}</span>`;
    } else {
      cluster += `<span class ="end">${e}</span>`;
    }
  });

  h1.innerHTML = cluster;
}

breakText();

gsap.from("h1 .start", {
  y: 90,
  opacity: 0,
  delay: 0.5,
  duration: 0.6,
  stagger: 0.15,
});
gsap.from("h1 .end", {
  y: 90,
  opacity: 0,
  delay: 0.5,
  duration: 0.6,
  stagger: -0.15,
});
