export default function About() {
  const items = [
    {
      title: "Live Instructors",
      text: "Expert mentors guiding students through real robotics learning."
    },
    {
      title: "Practical Learning",
      text: "Hands-on robotics instead of theory-heavy education."
    },
    {
      title: "One Real Project",
      text: "Students build meaningful robotics projects every year."
    },
    {
      title: "Future Skills",
      text: "Preparing students for AI, robotics, and engineering careers."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">

        <h2>What Makes Us Different</h2>

        <div className="grid">

          {items.map((item) => (
            <div className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}