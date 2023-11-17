const input = document.getElementById("input");
const kaydetbtn = document.getElementById("kaydet");
const yazi = document.getElementById("yazi");

kaydetbtn.addEventListener("click", () => {
  yazi.textContent = input.value;
  input.value = "";
});

const renkBtn = document.querySelector("#renk");
console.log(renkBtn);

const styleBtn = document.querySelector("#style");

const shadowBtn = document.querySelector("#shadow");

const geriBtn = document.querySelector("#geri");

const arkaBtn = document.querySelector("#arka");

renkBtn.addEventListener("click", () => {
  yazi.style.color = "blue";
});

styleBtn.addEventListener("click", function () {
  yazi.style.fontStyle = "italic";
});

shadowBtn.addEventListener("click", function () {
  yazi.style.textShadow = "1px 1px 10px black";
});

geriBtn.addEventListener("click", function () {
  yazi.style.color = "black";
  yazi.style.fontStyle = "";
  yazi.style.textShadow = "";
  body.style.background = "";
});

arkaBtn.addEventListener("click", function () {
  body.style.background = "yellow";
});
