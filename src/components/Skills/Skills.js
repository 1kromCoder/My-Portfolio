import { useState } from "react";
import "./Skills.css";

const skillsData = [
  {
    id: 1,
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 85 },
    ],
    icon: "uil uil-brackets-curly",
  },
  {
    id: 2,
    title: "Web Technologies & Frameworks",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Axios", level: 85 },
      { name: "React JS", level: 85 },
      { name: "Fetch API", level: 85 },
      { name: "Redux", level: 80 },
      { name: "Ant Design,", level: 80 },
      { name: "Shadcn UI,", level: 80 },
      { name: "Material UI (MUI),", level: 80 },
      { name: "Next JS", level: 70 },
      { name: "Bootstrap", level: 70 },
      { name: "Express JS", level: 80 },
      { name: "Nest JS", level: 85 },
      { name: "TypeORM", level: 85 },
      { name: "Sequelize", level: 85 },
      { name: "Mongoose", level: 85 },
      { name: "Microservices", level: 85 },
      { name: "REST API", level: 85 },
      { name: "Postman", level: 85 },
    ],
    icon: "uil uil-server-network",
  },
  {
    id: 3,
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 80 },
      { name: "Oracle", level: 80 },
    ],
    icon: "uil uil-database",
  },
  {
    id: 4,
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 80 },
      { name: "Zustand", level: 80 },
      { name: "React Query (TanStack Query)", level: 80 },
      { name: "Node JS", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "SWR", level: 85 },
      { name: "GitLab", level: 80 },
      { name: "Formik", level: 80 },
      { name: "Yup (validation)", level: 80 },
      { name: "React Hook Form", level: 80 },
      { name: "Visual Studio Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "Swagger Documentation", level: 85 },
      { name: "Docker", level: 70 },
      { name: "JWT Authentication", level: 80 },
      { name: "CI/CD", level: 70 },
      { name: "AWS", level: 70 },
    ],
    icon: "uil uil-setting",
  },
  {
    id: 5,
    title: "ORM / ODM",
    skills: [
      { name: "TypeORM", level: 80 }
    ],
    icon: "uil uil-setting",
  },
];

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleSkills = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">My Skills</h2>
      <span className="section__subtitle">My technical expertise</span>
      <div className="skills__container container">
        <div className="skills__column">
          {skillsData.slice(0, 2).map((skill) => {
            const { id, title, skills, icon } = skill;
            const isOpen = openIndex === id;

            return (
              <div key={id} className={`skill ${isOpen ? "open" : ""}`}>
                <div className="skill__top" onClick={() => toggleSkills(id)}>
                  <h3 className="skill__title">
                    <i className={`skill__title-icon ${icon}`} />
                    <span className="skill__title-text">{title}</span>
                  </h3>
                  {isOpen ? (
                    <i className="uil uil-angle-up skill__icon" />
                  ) : (
                    <i className="uil uil-angle-down skill__icon" />
                  )}
                </div>
                <ul className="skill__skills">
                  {skills.map((singleSkill, idx) => (
                    <li key={idx} className="skill__item">
                      <div className="skill__info">
                        <span className="skill__name">{singleSkill.name}</span>
                        <span className="skill__percentage">
                          {singleSkill.level}%
                        </span>
                      </div>
                      <div className="skill__level">
                        <div
                          className="skill__level-bar"
                          style={{ width: `${singleSkill.level}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="skills__column">
          {skillsData.slice(2, 4).map((skill) => {
            const { id, title, skills, icon } = skill;
            const isOpen = openIndex === id;

            return (
              <div key={id} className={`skill ${isOpen ? "open" : ""}`}>
                <div className="skill__top" onClick={() => toggleSkills(id)}>
                  <h3 className="skill__title">
                    <i className={`skill__title-icon ${icon}`} />
                    <span className="skill__title-text">{title}</span>
                  </h3>
                  {isOpen ? (
                    <i className="uil uil-angle-up skill__icon" />
                  ) : (
                    <i className="uil uil-angle-down skill__icon" />
                  )}
                </div>
                <ul className="skill__skills">
                  {skills.map((singleSkill, idx) => (
                    <li key={idx} className="skill__item">
                      <div className="skill__info">
                        <span className="skill__name">{singleSkill.name}</span>
                        <span className="skill__percentage">
                          {singleSkill.level}%
                        </span>
                      </div>
                      <div className="skill__level">
                        <div
                          className="skill__level-bar"
                          style={{ width: `${singleSkill.level}%` }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
