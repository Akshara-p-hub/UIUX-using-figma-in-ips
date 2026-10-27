// Learnova interactions: mobile navigation, signup feedback, and current year.
const menuToggle = document.querySelector("#menuToggle");
const primaryNav = document.querySelector("#primaryNav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Toggle navigation");
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Toggle navigation");
    });
  });

  document.addEventListener("click", (event) => {
    if (!primaryNav.contains(event.target) && !menuToggle.contains(event.target)) {
      primaryNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const signupForm = document.querySelector("#signupForm");
const emailInput = document.querySelector("#emailInput");
const formMessage = document.querySelector("#formMessage");

if (signupForm && emailInput && formMessage) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();

    if (!emailInput.checkValidity() || !email) {
      formMessage.textContent = "Please enter a valid email address.";
      emailInput.focus();
      return;
    }

    // Demo-only interaction: connect this handler to a real mailing-list API to collect signups.
    formMessage.textContent = `Thanks! ${email} is ready to join the Learnova community.`;
    signupForm.reset();
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
