console.log("This is from index.js");

const menuButtonElement = document.getElementById("menu-button");
const menuElement = document.getElementById("menu");
const menuCloseElement = document.getElementById("menu-close");
const menuLayerElement = document.getElementById("menu-layer");

menuButtonElement.addEventListener("click", () => {
  menuElement.classList.remove("hidden");
  menuLayerElement.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
});

menuCloseElement.addEventListener("click", () => {
  menuElement.classList.add("hidden");
  menuLayerElement.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
});

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // fade in observed elements that are in view
      entry.target.classList.replace("opacity-0", "opacity-100");
    } else {
      // fade out observed elements that are not in view
      entry.target.classList.replace("opacity-100", "opacity-0");
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

const fadeElms = document.querySelectorAll(".fade");
fadeElms.forEach((el) => observer.observe(el));
