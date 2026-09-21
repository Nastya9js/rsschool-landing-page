// Menu category switching

const menuTabs = document.querySelectorAll(".menu-tab");
const menuCards = document.querySelectorAll(".menu-card");

menuTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedCategory = tab.dataset.category;

    // Update active tab
    menuTabs.forEach((item) => {
      item.classList.remove("menu-tab--active");
      item.setAttribute("aria-pressed", "false");
    });

    tab.classList.add("menu-tab--active");
    tab.setAttribute("aria-pressed", "true");

    // Show only cards from selected category
    menuCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      card.hidden = cardCategory !== selectedCategory;
    });
  });
});
