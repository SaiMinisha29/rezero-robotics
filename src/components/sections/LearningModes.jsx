export default function LearningModes() {
  return (

    <section className="section">

      <div className="container">

        <h2>
          Flexible Learning Modes
        </h2>

        <p className="section-text">
          Rezero Robotics offers both offline and online learning
          experiences designed to make Robotics and AI education
          accessible, practical, and future-ready for every student.
        </p>

        <div className="modes-grid">

          {/* OFFLINE */}

          <div className="mode-card">

            <h3>
              🏫 Offline School Programs
            </h3>

            <p>
              Our offline programs are conducted directly inside schools
              with hands-on robotics kits, electronics components,
              sensors, and real hardware learning experiences.
            </p>

            <p>
              Students actively build projects, collaborate in teams,
              experiment with real-world technologies, and develop
              practical engineering and innovation skills through
              classroom-based activities.
            </p>

          </div>

          {/* ONLINE */}

          <div className="mode-card">

            <h3>
              💻 Live Online Learning
            </h3>

            <p>
              Our online sessions provide interactive Robotics, Coding,
              and AI learning through live mentorship, guided projects,
              simulations, and virtual demonstrations.
            </p>

            <p>
              Students learn from anywhere while still engaging in
              structured project-based activities, logical thinking,
              and technology exploration with continuous mentor support.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}