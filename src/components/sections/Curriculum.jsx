export default function Curriculum() {

  const curriculumData = [
    {
      grade: "Grade 3",
      title: "Scratch Programming",
      platform: "Scratch",
      desc: "Students learn coding fundamentals using visual programming."
    },

    {
      grade: "Grade 4",
      title: "Traffic Light Robot",
      platform: "Arduino Uno",
      desc: "Introduction to circuits, LEDs, and automation systems."
    },

    {
      grade: "Grade 5",
      title: "Obstacle Avoiding Car",
      platform: "Arduino",
      desc: "Learning sensors and autonomous movement."
    },

    {
      grade: "Grade 6",
      title: "Line Following Robot",
      platform: "Arduino",
      desc: "Building robots using IR sensors and logic."
    },

    {
      grade: "Grade 7",
      title: "RFID Attendance System",
      platform: "Arduino + RFID",
      desc: "Understanding RFID technology and smart systems."
    },

    {
      grade: "Grade 8",
      title: "Gesture Controlled Robot Arm",
      platform: "Arduino + Servos",
      desc: "Learning motion control and robotics mechanics."
    },

    {
      grade: "Grade 9",
      title: "Maze Solving Robot",
      platform: "Arduino Mega",
      desc: "Advanced autonomous navigation and algorithms."
    },

    {
      grade: "Grade 10",
      title: "Bluetooth RC Car",
      platform: "ESP32",
      desc: "Wireless communication and remote robotics."
    }
  ];

  return (
    <section id="curriculum" className="section">

      <div className="container">

        <h2>Our 8-Year Robotics Journey</h2>

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