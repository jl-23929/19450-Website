document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  menuButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click from bubbling to document
    const isExpanded = this.getAttribute("aria-expanded") === "true";

    this.setAttribute("aria-expanded", !isExpanded);
    menu.classList.toggle("hidden");
  });

  document.addEventListener("click", function () {
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });

  menu.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
