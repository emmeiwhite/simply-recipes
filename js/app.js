const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) {
    return element;
  }

  throw new Error(
    `selector not correctly used. There is no ${selector} class selector`
  );
};

const navBtn = getElement(".nav-btn");
const navLinks = getElement(".nav-links");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});
