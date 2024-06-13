const socialList = document.getElementById("social-list");

const renderSocialLinks = () => {
  const socialIcons = [
    {
      icon: "<i class='bx bx-envelope'></i>",
      url: "mailto:gabialberini733@gmail.com",
    },
    {
      icon: "<i class='bx bx-phone-call' ></i>",
      url: "tel:12345678",
    },
    {
      icon: "<i class='bx bxl-linkedin'></i>",
      url: "https://www.linkedin.com/in/gabriel-alberini/",
    },
    {
      icon: "<i class='bx bxl-twitter' ></i>",
      url: "https://x.com/pepito",
    },
    {
      icon: "<i class='bx bxl-github' ></i>",
      url: "https://github.com/GabrielAlberini",
    },
  ];

  socialIcons.forEach((icon) => {
    socialList.innerHTML += `
      <li>
        <a href="${icon.url}" target="_blank">${icon.icon}</a>
      </li>
    `;
  });
};

const renderWorks = () => {
  const worksArticle = document.getElementById("works-list");

  const works = [
    {
      name: "Google",
      yearStart: 2000,
      yearEnd: 0,
      role: "Desarrollador Frontend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate voluptas dicta corrupti unde minus autem rerum, obcaecati commodi odit?",
    },
    {
      name: "Google",
      yearStart: 2000,
      yearEnd: 0,
      role: "Desarrollador Frontend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate voluptas dicta corrupti unde minus autem rerum, obcaecati commodi odit?",
    },
    {
      name: "Google",
      yearStart: 2000,
      yearEnd: 2021,
      role: "Desarrollador Frontend",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate voluptas dicta corrupti unde minus autem rerum, obcaecati commodi odit?",
    },
  ];

  works.forEach((work) => {
    worksArticle.innerHTML += `
    <div>
      <div class="cont-name-work">
        <h3><a href="#">${work.name}</a></h3>
        <h4>${work.yearStart} - ${
      work.yearEnd !== 0 ? work.yearEnd : "actualidad"
    }</h4>
      </div>
        <h4>${work.role}</h4>
        <p>${work.description}</p>
    </div>
    `;
  });
};

const renderEducaction = () => {
  const worksArticle = document.getElementById("education-list");

  const educationTitles = [
    {
      name: "Maestria en SQL",
      yearStart: 2020,
      yearEnd: 2021,
      university: "Cambridge",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate voluptas dicta corrupti unde minus autem rerum, obcaecati commodi odit?",
    },
  ];

  educationTitles.forEach((education) => {
    worksArticle.innerHTML += `
    <div>
      <div class="cont-name-education">
        <h3><a href="#">${education.name}</a></h3>
        <h4>${education.yearStart} - ${
      education.yearEnd !== 0 ? education.yearEnd : "actualidad"
    }</h4>
      </div>
        <h4>${education.university}</h4>
        <p>${education.description}</p>
    </div>
    `;
  });
};

const renderProjects = () => {
  const projectList = document.getElementById("project-list");

  const projects = [
    {
      name: "Coca cola home page",
      url: "#",
      status: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, blanditiis.",
      tags: ["Elige tu propia aventura", "en desarrollo"],
    },
    {
      name: "Coca cola home page",
      url: "#",
      status: 0,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, blanditiis.",
      tags: ["Elige tu propia aventura", "en desarrollo", "aprendiendo js"],
    },
  ];

  projects.forEach((project) => {
    const arrayOfItemList = project.tags.map((tag) => `<li>${tag}</li>`);

    const stringOfTags = arrayOfItemList.join("");

    projectList.innerHTML += `
    <div class="project">
      <div class="cont-header-project">
        <h3><a href="${project.url}">${project.name}</a></h3>
        <span class="${project.status === 1 ? "production" : ""}"></span>
      </div>
      <p>${project.description}</p>
      <ul>
        ${stringOfTags}
      </ul>
    </div>
    `;
  });
};

renderSocialLinks();
renderWorks();
renderEducaction();
renderProjects();
