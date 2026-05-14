import grade3 from "../../assests/images/grade3.jpg";
import grade4 from "../../assests/images/grade4.jpg";
import grade5 from "../../assests/images/grade5.jpg";
import grade6 from "../../assests/images/grade6.jpg";
import grade7 from "../../assests/images/grade7.jpg";
import grade8 from "../../assests/images/grade8.jpg";
import grade9 from "../../assests/images/grade9.jpg";
import grade10 from "../../assests/images/grade10.jpg";

export default function Projects() {

  const projects = [

    {
      title: "Creative Coding & Interactive Learning",
      image: grade3,

      desc:
        "Students begin their innovation journey through visual programming, storytelling, animations, and interactive game development while building creativity and logical thinking skills."
    },

    {
      title: "Electronics & Smart Circuit Design",
      image: grade4,

      desc:
        "Students explore circuits, LEDs, sensors, and beginner-friendly Arduino activities through engaging practical experiments and real-world electronics applications."
    },

    {
      title: "Autonomous Robotics & Sensors",
      image: grade5,

      desc:
        "Students build intelligent robotics projects using sensors, motors, and automation systems while learning problem-solving and computational thinking."
    },

    {
      title: "Arduino Based Robotics Systems",
      image: grade6,

      desc:
        "Students create advanced robotic systems using Arduino, automation principles, and real-time hardware integration to strengthen engineering fundamentals."
    },

    {
      title: "IoT & Smart Technology Solutions",
      image: grade7,

      desc:
        "Students are introduced to IoT concepts, RFID technology, and wireless communication systems used in modern smart devices and automation industries."
    },

    {
      title: "Engineering Design & Advanced Robotics",
      image: grade8,

      desc:
        "Students work on robotic mechanisms, motion control systems, and innovative engineering projects while enhancing teamwork and design thinking skills."
    },

    {
      title: "Artificial Intelligence & Autonomous Systems",
      image: grade9,

      desc:
        "Students explore intelligent robotics, autonomous navigation, AI-based decision-making, and algorithmic problem-solving through hands-on innovation projects."
    },

    {
      title: "Future Technologies & Embedded AI",
      image: grade10,

      desc:
        "Students build future-ready projects integrating embedded systems, wireless technologies, automation, and AI concepts to prepare for emerging technology careers."
    }

  ];

  return (
    <section
      id="projects"
      className="section"
    >

      <div className="container">

        <h2>
          Student Innovation Showcase
        </h2>

        <p className="section-text">
          From coding fundamentals to advanced AI and robotics systems,
          students at Rezero Robotics engage in hands-on innovation projects
          designed to build creativity, problem-solving, engineering thinking,
          and future-ready technology skills.
        </p>

        <div className="projects-grid">

          {projects.map((project) => (

            <div
              className="project-card"
              key={project.title}
            >

              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />

              <div className="project-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}