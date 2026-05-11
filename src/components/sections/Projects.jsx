export default function Projects() {

  const projects = [
    {
      title: "Obstacle Avoiding Robot",
      desc: "Autonomous robot using ultrasonic sensors."
    },

    {
      title: "Line Following Robot",
      desc: "IR sensor based intelligent navigation robot."
    },

    {
      title: "RFID Attendance System",
      desc: "Smart attendance system using RFID technology."
    },

    {
      title: "Gesture Controlled Robot Arm",
      desc: "Hand gesture based robotic arm movement."
    },

    {
      title: "Maze Solving Robot",
      desc: "Autonomous robot solving maze paths."
    },

    {
      title: "Bluetooth RC Car",
      desc: "Wireless mobile controlled robotics vehicle."
    }
  ];

  return (
    <section id="projects" className="section">

      <div className="container">

        <h2>Student Innovation Showcase</h2>

        <p className="section-text">
          Real robotics projects built by students through hands-on learning.
        </p>

        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.title}>

              <div className="project-image">
                🤖
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}