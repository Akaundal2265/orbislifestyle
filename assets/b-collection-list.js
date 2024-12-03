document.addEventListener("DOMContentLoaded", function () {
  const filter = document.querySelector(".c-collection-list__filter");
  const filterToggle = document.querySelector(".filter-toggle");
  const filterItems = document.querySelectorAll(
    ".c-collection-list__filter-item"
  );

  // Initial setup of default text and icon
  const firstItem = filterItems[0];
  const defaultText = firstItem.querySelector(
    ".b-collection-list__title"
  ).innerText;
  const defaultIconSrc = firstItem
    .querySelector(".filter-icon")
    .getAttribute("data-src");

  document.querySelector(".filter-toggle-text").innerText = defaultText;
  const selectedIcon = document.querySelector(".selected-filter-icon");
  selectedIcon.src = defaultIconSrc;
  selectedIcon.style.display = "inline";

  // Set the first item as active and show its content
  firstItem.classList.add("active");
  document
    .querySelector(".c-collection-list__items-container.active")
    .classList.add("active");

  // Toggle dropdown visibility on button click
  filterToggle.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent this click from closing the dropdown
    filter.classList.toggle("show-filter-items");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!filter.contains(event.target)) {
      filter.classList.remove("show-filter-items");
    }
  });

  // Attach click event to each filter item
  filterItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      selectFilter(item, index + 1); // Adjust index to match template-based indexing
    });
  });

  // Function to select an item and update the button text, icon, and content
  function selectFilter(selectedItem, index) {
    // Remove active class from all items
    filterItems.forEach((item) => item.classList.remove("active"));
    selectedItem.classList.add("active");

    // Update selected text and icon
    const selectedText = selectedItem.querySelector(
      ".b-collection-list__title"
    ).innerText;
    const selectedIconSrc = selectedItem
      .querySelector(".filter-icon")
      .getAttribute("data-src");
    document.querySelector(".filter-toggle-text").innerText = selectedText;
    selectedIcon.src = selectedIconSrc;
    selectedIcon.style.display = "inline";

    // Hide all content containers and show the selected one
    const allContainers = document.querySelectorAll(
      ".c-collection-list__items-container"
    );
    allContainers.forEach((container) => {
      container.classList.remove("active");
      container.classList.add("hidden");
    });

    // Adjust for zero-based indexing on the content containers
    const activeContainer = document.querySelector(`.tab-container-${index}`);
    if (activeContainer) {
      activeContainer.classList.remove("hidden");
      activeContainer.classList.add("active");
    }

    // Close the dropdown after selection
    filter.classList.remove("show-filter-items");
  }
});
