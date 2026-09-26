const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
} else {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
  }
}

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

darkModeQuery.addEventListener("change", (event) => {
  if (!localStorage.getItem("theme")) {
    if (event.matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }
});

const themeSwitch = document.querySelector(".theme-switch");

themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
});
