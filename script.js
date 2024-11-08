document.addEventListener("DOMContentLoaded", function() {
  const toggleThemeBtn = document.getElementById("toggleThemeBtn");
  let isDarkMode = false;

  toggleThemeBtn.addEventListener("click", function() {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    toggleThemeBtn.textContent = isDarkMode ? "Light Theme" : "Dark Theme";
  });

  // Smooth scroll for nav links
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Remove the "#" character
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

document.getElementById("toggleThemeBtn").addEventListener("click", function() {
  document.body.toggleAttribute("data-theme", "dark"); // toggle theme
  const icon = this.querySelector("i");
  const text = this.querySelector("span");

  if (icon.classList.contains("fa-moon")) {
    icon.classList.replace("fa-moon", "fa-sun");
    text.textContent = "Day Mode";
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    text.textContent = "Night Mode";
  }
});
