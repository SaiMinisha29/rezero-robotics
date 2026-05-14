export default function Curriculum() {

const curriculumData = [

  {
    grade: "Grade 3",

    platform: "Scratch Programming",

    desc:
      "Students are introduced to computational thinking through visual block coding. They learn sequencing, animations, logic building, storytelling, and basic game development in a fun and interactive way."
  },

  {
    grade: "Grade 4",

    platform: "Basic Electronics & Arduino",

    desc:
      "Students explore circuits, LEDs, sensors, and automation concepts using beginner-friendly Arduino activities that encourage creativity and hands-on experimentation."
  },

  {
    grade: "Grade 5",

    platform: "Robotics & Sensors",

    desc:
      "Students learn the fundamentals of robotics by working with sensors, motors, and autonomous movement while developing logical thinking and problem-solving skills."
  },

  {
    grade: "Grade 6",

    platform: "Arduino Robotics",

    desc:
      "Students build intelligent robotic systems using Arduino, IR sensors, and automation principles while understanding real-world robotics applications."
  },

  {
    grade: "Grade 7",

    platform: "IoT & Smart Systems",

    desc:
      "Students are introduced to smart technologies such as RFID, wireless communication, and connected systems to understand modern automation and digital innovation."
  },

  {
    grade: "Grade 8",

    platform: "Advanced Robotics",

    desc:
      "Students work on robotic mechanisms, motion control, and interactive systems while strengthening creativity, teamwork, and engineering design thinking."
  },

  {
    grade: "Grade 9",

    platform: "AI & Autonomous Systems",

    desc:
      "Students learn advanced robotics concepts including autonomous navigation, intelligent decision making, algorithms, and real-world AI applications."
  },

  {
    grade: "Grade 10",

    platform: "Embedded Systems & AI",

    desc:
      "Students explore advanced embedded systems, wireless technologies, AI integration, and real-world innovation projects to prepare for future technologies and careers."
  }

];

  return (
    <section id="curriculum" className="section">

      <div className="container">

        <h2>Robotics Journey With Us</h2>

        <p className="section-text">
          From beginner coding to advanced robotics engineering.
        </p>

        <div className="timeline">

          {curriculumData.map((item) => (
            <div className="timeline-card" key={item.grade}>

              <div className="timeline-grade">
                {item.grade}
              </div>

              <h3>{item.title}</h3>

              <span className="platform">
                {item.platform}
              </span>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}