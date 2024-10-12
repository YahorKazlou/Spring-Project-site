const projects = [
  {
    name: "Spring Boot",
    text: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
    imgUrl: "assets/spring-boot.svg",
    link: "",
  },
  {
    name: "Spring Framework",
    text: "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
    imgUrl: "assets/spring-framework.svg",
    link: "",
  },
  {
    name: "Spring Data",
    text: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
    imgUrl: "assets/spring-data.svg",
    link: "",
  },
  {
    name: "Spring Cloud",
    text: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
    imgUrl: "assets/spring-cloud.svg",
    link: "",
  },
  {
    name: "Spring Cloud Data Flow",
    text: "Provides an orchestration service for composable data microservice applications on modern runtimes.",
    imgUrl: "assets/spring-data-flow.svg",
    link: "",
  },
  {
    name: "Spring Scurity",
    text: "Protects your application with comprehensive and extensible authentication and authorization support.",
    imgUrl: "assets/spring-security.svg",
    link: "",
  },
];

const populateProject = (projectClass) => {
  let projectElement = document.getElementsByClassName(projectClass)[0];
  projects.forEach((item) => {
    const articleItem = createDOMElement({
      tag: "article",
    });
    const boxItem = createDOMElement({
      tag: "a",
      className: "box is-special item",
    });
    boxItem.href = item.link;
    const projectItem = createDOMElement({
      tag: "div",
      className: "project-item",
    });
    const imageBoxtItem = createDOMElement({
      tag: "div",
      className: "image",
    });
    const imageItem = createDOMElement({
      tag: "img",
    });
    imageItem.src = item.imgUrl;
    imageItem.alt = item.name;
    const projectInfo = createDOMElement({
      tag: "div",
      className: "project-info",
    });
    const nameItem = createDOMElement({
      tag: "h1",
      className: "is-size-4 has-text-weight-medium",
      textContent: item.name,
    });
    const textItem = createDOMElement({
      tag: "p",
      className: "py-3",
      textContent: item.text,
    });

    imageBoxtItem.appendChild(imageItem);
    projectInfo.appendChild(nameItem);
    projectInfo.appendChild(textItem);
    projectItem.appendChild(imageBoxtItem);
    projectItem.appendChild(projectInfo);
    boxItem.appendChild(projectItem);
    articleItem.appendChild(boxItem);

    projectElement.appendChild(articleItem);
  });
};

displayProjects(projects);

function displayProjects(projectsToDisplay) {
  // 1. get conteiner element
  // 2. clear projects on screen
  // projects.innerHTML = "";

  if (projectsToDisplay.length === 0) {
  //   projects.textContent = "No results";
  //   return;
  } else {
// generate projects

  }
}

function filterProjects(event) {
  const searchTerm = event.target.value.toLowerCase();
// what if search temr empty????
  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm),
  );

  displayProjects(filteredProjects);
}

document
  .getElementsByClassName("searchInput")
  .addEventListener("input", filterProjects);
