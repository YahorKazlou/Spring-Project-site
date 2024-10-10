const navArray = [
  {
    title: "Wht Spring",
    items: [
      { name: "Overview" },
      { name: "Microservices" },
      { name: "Reactive" },
      { name: "Event Driven" },
      { name: "Cloud" },
      { name: "Web Applications" },
      { name: "Serverless" },
      { name: "Batch" },
    ],
  },
  {
    title: "Learn",
    items: [
      { name: "Overview" },
      { name: "Quickstart" },
      { name: "Guides" },
      { name: "Blog" },
    ],
  },
  {
    title: "Projects",
    items: [
      { name: "Overview" },
      { name: "Spring Boot" },
      { name: "Spring Framowork" },
      { name: "Spring Cloud" },
      { name: "Spring Cloud Data Flow" },
      { name: "Spring Data" },
      { name: "Spring Integration" },
      { name: "Spring Batch" },
      { name: "Spring Security" },
      { name: "Spring AI" },
      { name: "View all projects" },
      { name: "DEVELOPMENT TOOLS", type: "subheader" },
      { name: "Spring Tools 4" },
      { name: "Spring Initializr", icon: null },
    ],
  },
  {
    title: "Academy",
    items: [{ name: "Courses" }, { name: "Get Certified" }],
  },
  {
    title: "Solutions",
    items: [
      { name: "Overview" },
      { name: "Tanzu Spring" },
      { name: "Spring Consulting" },
      { name: "Spring Academy For Teams" },
      { name: "Security Advisories" },
    ],
  },
  {
    title: "Community",
    items: [{ name: "Overview" }, { name: "Events" }, { name: "Autors" }],
  },
];

const populateDesktopNavbar = () => {
  let navbarMenu = document.getElementsByClassName("navbar-menu")[0];
  navArray.forEach((item) => {
    const navbarItem = document.createElement("div");
    navbarItem.className =
      "navbar-item has-dropdown is-hoverable navbar-group-item";
    const navbarItemText = document.createElement("span");
    navbarItemText.className = "navbar-link";
    navbarItemText.textContent = item.title;
    navbarItem.appendChild(navbarItemText);

    const navbarItemChildren = document.createElement("ul");
    navbarItemChildren.className = "navbar-dropdown is-boxed";

    item.items.forEach((childItem) => {
      const navbarChild = document.createElement("li");
      const navbarChildLink = document.createElement("a");
      navbarChildLink.className = "navbar-item";
      navbarChildLink.textContent = childItem.name;
      navbarChild.appendChild(navbarChildLink);
      navbarItemChildren.appendChild(navbarChild);
    });
    navbarItem.appendChild(navbarItemChildren);

    navbarMenu.appendChild(navbarItem);
  });
};

window.onload = function () {
  populateDesktopNavbar();
};
