
  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-dark-mode");
    const root = document.documentElement;

    // Aplicar tema guardado
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      root.setAttribute("data-theme", "dark");
    }

    toggleBtn.addEventListener("click", () => {
      const isDark = root.getAttribute("data-theme") === "dark";
      if (isDark) {
        root.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
      } else {
        root.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    });
  });
