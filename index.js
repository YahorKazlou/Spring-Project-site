window.onload = function () {
  populateNavbar("navbar-menu-mobile", true);

  populateNavbar("navbar-menu-desktop", false);

  populateProject();

  document
    .getElementsByClassName("searchInput")[0]
    .addEventListener("input", debounce(filterProjects, 300));
};
