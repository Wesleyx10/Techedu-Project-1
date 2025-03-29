const links = document.querySelector(".links");
const btn = document.querySelector(".download");
const opens = document.querySelector(".open");
const closes = document.querySelector(".close");

opens.addEventListener("click", () => {
  links.style.display = "flex";
  btn.style.display = "block";
  opens.style.display = "none";
  closes.style.display = "block";
});

closes.addEventListener("click", () => {
  links.style.display = "none";
  btn.style.display = "none";
  opens.style.display = "block";
  closes.style.display = "none";
});
