import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero-section">

      <div className="container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="intro-text">
            MERN STACK DEVELOPER
          </p>

          <h1 className="hero-name">
            Hi, I'm <span>Rajeshwari S</span>
          </h1>

          <div className="typing-text">

            <TypeAnimation
              sequence={[
                "Building modern web experiences",
                2000,
                "React & MERN Stack Developer",
                2000,
                "Creating scalable web apps",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          <p className="hero-description">
            Passionate MERN Stack Developer focused on
            building responsive, scalable, and user-friendly
            web applications using modern technologies.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn custom-btn"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="btn resume-btn"
            >
              Resume
            </a>

          </div>

          <div className="social-icons">

            <a
              href="https://github.com/Raji220307"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rajeshwarisakthivel/"
              target="_blank"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;

