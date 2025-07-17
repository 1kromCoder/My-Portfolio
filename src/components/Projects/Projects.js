import { useEffect, useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "ONLINE EDUCATIONAL CENTER SEARCH PLATFORM",
    description:
      "Implemented a complete authentication and authorization system, including route protection and role-based access.Applied security best practices to ensure user data protection.Designed scalable backend logic for managing users and educational center resources",
    // url: "https://buyno.vercel.app",
    category: "Backend",
  },
  {
    id: 2,
    title: "ONLINE SHOP MARKETPLACE",
    description:
      " Developed core modules such as product management, user system, and shopping logic.Implemented CRUD operations, filtering, sorting, and pagination. Wrote unit and integration tests to ensure API reliability",
    // url: "https://kisanbazar.vercel.app",
    category: "Backend",
  },
  {
    id: 3,
    title: "MY WORKERS",
    description:
      "Built a real-time worker assignment and task tracking module.Enabled admins to assign tasks based on availability and monitor progress.Developed RESTful APIs and role-based access dashboards",
    // url: "https://gher.vercel.app",
    category: "Backend",
  },
  {
    id: 4,
    title: "Najot Education Training Center Clone",
    description:
      "Implemented a complete authentication and authorization system, including route protection and role-based access.Applied security best practices to ensure user data protection.Designed scalable backend logic for managing users and educational center resources",
    // url: "https://armostore.ca",
    category: "Frontend",
  },
  {
    id: 5,
    title: "NFT Marketplace",
    description:
      "An NFT marketplace is a platform where users can create, buy, sell, and trade NFTs (digital assets) using blockchain and cryptocurrencies. It ensures ownership, security, and transparency through smart contracts.",
    // url: "https://armostore.ca",
    category: "Frontend",
  },
  // {
  //   id: 5,
  //   title: "NFT Marketplace",
  //   description:
  //     "Implemented a complete authentication and authorization system, including route protection and role-based access.Applied security best practices to ensure user data protection.Designed scalable backend logic for managing users and educational center resources",
  //   // url: "https://armostore.ca",
  //   category: "Frontend",
  // },
  // {
  //   id: 5,
  //   title: "Goal Pulse",
  //   description:
  //     "A goal-setting and tracking app focused on simplicity, clarity, and consistency for personal growth.",
  //   url: "https://goalpulse.vercel.app",
  //   category: "fullstack",
  // },
  // {
  //   id: 6,
  //   title: "Book Dock",
  //   description:
  //     "A clean CRUD app for managing, searching, and organizing books by title or author.",
  //   url: "https://bookdock.vercel.app",
  //   category: "fullstack",
  // },
  // {
  //   id: 7,
  //   title: "Roomista",
  //   description:
  //     "A rental room discovery platform with intuitive filters and a mobile-first responsive UI.",
  //   url: "https://roomista.netlify.app",
  //   category: "frontend",
  // },
  // {
  //   id: 8,
  //   title: "Fit Club",
  //   description:
  //     "A fitness website with structured content and modern UI for health-focused audiences.",
  //   url: "https://thefitclub-web.netlify.app",
  //   category: "frontend",
  // },
  // {
  //   id: 9,
  //   title: "Color Craft",
  //   description:
  //     "A tool for designers to explore colors, palettes, and transparency effects with ease.",
  //   url: "https://colorcraft-web.netlify.app/",
  //   category: "frontend",
  // },
];

const Projects = () => {
  const projectsNav = [
    "All",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      setProjects(
        projectsData.filter((project) => project.category === item.name)
      );
    }
  }, [item]);
  return (
    <section className="section portfolio__projects" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>
      <div>
        <div className="projects__filters">
          {projectsNav.map((navText, index) => {
            return (
              <span
                className={
                  item.name === navText
                    ? "active__filters-item projects__filters-item"
                    : "projects__filters-item"
                }
                key={index}
                onClick={() => setItem({ name: navText })}
              >
                {navText}
              </span>
            );
          })}
        </div>
        <div className="projects__container container grid">
          {projects.map(({ id, title, url, description }) => {
            return (
              <div class="card" key={id}>
                <div class="content">
                  <div class="h6">{title}</div>
                  <p>{description}</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="project__button"
                  >
                    Demo{" "}
                    <i className="bx bx-right-arrow-alt project__button-icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
