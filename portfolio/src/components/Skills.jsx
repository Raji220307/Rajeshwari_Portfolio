import { motion } from "framer-motion";

function Skills() {

  const skills = [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Git",
    "GitHub",
    "Postman"
  ];

  return (
    <section id="skills" className="skills-section">

      <div className="container">

        <h2 className="section-heading">
          Skills
        </h2>

        <div className="row">

          {skills.map((skill, index) => (

            <motion.div
              className="col-md-3 mb-4"
              key={index}
              whileHover={{ scale: 1.05 }}
            >

              <div className="skill-card">
                {skill}
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;