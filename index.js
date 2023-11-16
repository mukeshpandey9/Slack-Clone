window.addEventListener("scroll", () => {
  const header = document.querySelector("nav");
  const logo = document.querySelector("svg");
  const innerNav = document.querySelector(".inside-nav");
  // Navbar
  header.classList.toggle("md:border-2", window.scrollY > 80);
  header.classList.toggle("bg-[rgba(255,255,255,0.5)]", window.scrollY > 80);
  innerNav.classList.toggle("text-darkPurple", window.scrollY > 50);
  document
    .getElementById("btn")
    .classList.toggle("border-darkPurple", window.scrollY > 50);

  // Nav Logo

  logo.classList.toggle("hidden", scrollY > 80);

  document.querySelector(".logosvg").classList.toggle("hidden", scrollY < 80);
});

// Navigation

let bars = document.querySelector(".bars");

let offCanvas = document.getElementById("offcanvasRight");

bars.addEventListener("click", () => {
  offCanvas.style.right = "100%";
  console.log("open");
});

let close = document.querySelector(".cross");
close.addEventListener("click", () => {
  offCanvas.style.right = "0%";
  console.log("close");
});

// Sherey JS

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
