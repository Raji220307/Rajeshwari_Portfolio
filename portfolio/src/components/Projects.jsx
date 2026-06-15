import { motion } from "framer-motion";

function Projects() {

  const projects = [
    {
      title: "Digital Notice Board",
      desc:
        "Centralized platform for sharing academic and event announcements.",
    },

    {
      title: "Cashew E-Commerce",
      desc:
        "Responsive e-commerce website with shopping functionality.",
    },

    {
      title: "Lost & Found Portal",
      desc:
        "MERN platform for reporting and finding lost items.",
    },
  ];

  return (
    <section id="projects" className="projects-section">

      <div className="container">

        <h2 className="section-heading">
          Projects
        </h2>

        <div className="row">

          {projects.map((project, index) => (

            <motion.div
              className="col-lg-4 mb-4"
              key={index}
              whileHover={{ y: -10 }}
            >

              <div className="project-card">

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <div className="project-buttons">

                  <a
                    href="https://github.com/Raji220307"
                    className="btn btn-primary"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;