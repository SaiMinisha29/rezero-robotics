import demoPageImage from "../../assets/images/demopageimage.jpg";
export default function BookDemo() {

  return (

    <section
      id="book-demo"
      className="section"
    >

      <div className="container">

        <div className="demo-box">

          <div className="demo-content">

            <h2>
              Start Your Robotics & AI Journey
            </h2>

            <p>
              Choose the learning experience that best fits
              your school or student needs. Rezero Robotics
              offers both hands-on offline programs and
              interactive online learning experiences designed
              to make future technologies accessible, practical,
              and engaging.
            </p>
            <img
                src={demoPageImage}
                alt="Rezero Robotics Demo"
                className="demo-image"
/>

          </div>

          <div className="demo-options">

            {/* OFFLINE */}

            <div className="demo-card">

              <h3>
                🏫 Offline School Demo
              </h3>

              <p>
                Experience live classroom-based Robotics and AI
                sessions with practical hardware activities,
                robotics kits, electronics experiments,
                and innovation projects conducted directly in schools.
              </p>

              <a
                href="https://wa.me/919513053173?text=Hello%20Rezero%20Robotics,%20I%20would%20like%20to%20book%20an%20offline%20school%20demo."
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                Book Free Demo
              </a>

            </div>

            {/* ONLINE */}

            <div className="demo-card">

              <h3>
                💻 Online Learning Program
              </h3>

              <p>
                Join live online Robotics, Coding, and AI sessions
                with guided projects, mentor support,
                and flexible learning experiences accessible from anywhere.
              </p>

              <a
                href="https://wa.me/919513053173?text=Hello%20Rezero%20Robotics,%20I%20would%20like%20to%20register%20for%20the%20online%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                Book Free Demo
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}