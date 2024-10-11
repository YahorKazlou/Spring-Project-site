const navArray = [
  {
    title: "Why Spring",
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
      { name: "View all projects", type: "viewall" },
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

const classNamesDesktop = {
  navbarItem: "navbar-item has-dropdown is-hoverable navbar-group-item",
  navbarItemText: "navbar-link",
  navbarItemChildren: "navbar-dropdown is-boxed",
  navbarChildContent: "navbar-item",
};

const classNamesMobile = {
  navbarItem: "navbar-item has-dropdown is-hoverable navbar-group-item",
  navbarItemText: "navbar-link",
  navbarItemChildren: "navbar-dropdown is-boxed",
  navbarChildContent: "navbar-item",
};

const createDOMElement = ({ tag, className, textContent }) => {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (textContent) {
    element.textContent = textContent;
  }

  return element;
};

const populateNavbar = (menuClass, classNames, isMenuSectionClickable) => {
  let navbarMenu = document.getElementsByClassName(menuClass)[0];
  navArray.forEach((item) => {
    const navbarItem = createDOMElement({
      tag: "div",
      className: classNames.navbarItem,
    });
    // make this clickable
    const navbarItemText = createDOMElement({
      tag: "span",
      className: classNames.navbarItemText,
      textContent: item.title,
    });
    if (isMenuSectionClickable) {
      navbarItemText.addEventListener(
        "click",
        onMenuSectionClick(navbarItemText),
      ); // ? false
    }
    navbarItem.appendChild(navbarItemText);

    const navbarItemChildren = createDOMElement({
      tag: "ul",
      className: classNames.navbarItemChildren,
    });

    item.items.forEach((childItem) => {
      const navbarChild = createDOMElement({
        tag: "li",
      });

      const navbarChildContent = createDOMElement({
        tag: childItem.type === "subheader" ? "div" : "a",
        className:
          classNames.navbarChildContent +
          (childItem.type === "viewall" ? " is-link mb-5" : ""),
        textContent: childItem.name,
      });
      navbarChild.appendChild(navbarChildContent);
      navbarItemChildren.appendChild(navbarChild);
    });
    navbarItem.appendChild(navbarItemChildren);

    navbarMenu.appendChild(navbarItem);
  });
};

window.onload = function () {
  const isDesktop = window.innerWidth > 1000;
  populateNavbar(
    isDesktop ? "navbar-menu-desktop" : "navbar-menu-mobile",
    isDesktop ? classNamesDesktop : classNamesMobile,
    !isDesktop,
  );
};

let isMenuOpen = false;

const onBurgerMenuClick = () => {
  const menu = document.getElementById("navMenu");
  menu.style.transform = `translateY(${isMenuOpen ? "-100%" : "0"})`;
  const burgerIcon = document.getElementsByClassName("hamburger-react")[0];
  burgerIcon.style.color = isMenuOpen ? "#4a4a4a" : "white";
  isMenuOpen = !isMenuOpen;
};

const onMenuSectionClick = (node) => {
  let isCurrentMenuOpened = false;

  return () => {
    if (isCurrentMenuOpened) {
      node.parentElement.classList.remove("subitems-show");
    } else {
      const allMenus = document.getElementsByClassName("has-dropdown");
      Array.prototype.forEach.call(allMenus, (menu) => {
        menu.classList.remove("subitems-show");
      });
      node.parentElement.classList.add("subitems-show");
    }
    isCurrentMenuOpened = !isCurrentMenuOpened;
  };
};
