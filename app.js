const links = document.querySelector(".links");
const opens = document.querySelector(".open");
const closes = document.querySelector(".close");

opens.addEventListener("click", () => {
  links.style.display = "flex";
  opens.style.display = "none";
  closes.style.display = "block";
});

closes.addEventListener("click", () => {
  links.style.display = "none";
  opens.style.display = "block";
  closes.style.display = "none";
});
