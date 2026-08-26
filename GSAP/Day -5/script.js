let h1Text = document.querySelector("h1").textContent;

let splitText = h1Text.split("");
let cluster = "";

splitText.forEach((e) => {
  cluster += e;
});

console.log(cluster);
