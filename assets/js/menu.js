// Menu category switching and mobile pagination

const menuTabs = document.querySelectorAll(".menu-tab");
const menuCards = document.querySelectorAll(".menu-card");
const menuGrid = document.querySelector(".menu-grid");
const menuMoreBtn = document.querySelector(".menu-more");

let currentPage = 0; // 0 = items 1-4, 1 = items 5-8

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

    // Reset pagination when switching categories
    currentPage = 0;
    menuGrid.classList.remove("menu-grid--page-1");

    // Show only cards from selected category
    menuCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      card.hidden = cardCategory !== selectedCategory;
    });
  });
});

// Mobile pagination: refresh button cycles through coffee items
if (menuMoreBtn) {
  menuMoreBtn.addEventListener("click", () => {
    const activeTab = document.querySelector(".menu-tab--active");
    const activeCategory = activeTab.dataset.category;

    if (activeCategory === "coffee") {
      currentPage = currentPage === 0 ? 1 : 0;

      if (currentPage === 1) {
        menuGrid.classList.add("menu-grid--page-1");
      } else {
        menuGrid.classList.remove("menu-grid--page-1");
      }
    }
  });
}
