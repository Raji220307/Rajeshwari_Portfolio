import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h2 className="section-heading">
            About Me
          </h2>

          <div className="about-card">

            <p>
              Motivated MERN Stack Developer with
              experience in building responsive
              full-stack applications using
              MongoDB, Express.js, React.js,
              and Node.js.
            </p>

            <p>
              Passionate about solving real-world
              problems through clean and scalable
              web applications.
            </p>

            <div className="row mt-4">

              <div className="col-md-4">
                <div className="info-box">
                  <h5>Education</h5>
                  <p>B.E CSE</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="info-box">
                  <h5>Location</h5>
                  <p>Chennai</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="info-box">
                  <h5>Status</h5>
                  <p>Fresher</p>
                </div>
              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;