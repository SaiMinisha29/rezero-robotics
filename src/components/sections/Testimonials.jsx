export default function Testimonials() {

  const testimonials = [
    {
      name: "Dr. Anjali Sharma",
      role: "Principal",
      quote:
        "Students became genuinely excited about learning because they were building real robotics projects instead of memorizing theory."
    },

    {
      name: "Rajesh Kumar",
      role: "Parent",
      quote:
        "My child now thinks creatively, solves problems confidently, and actually looks forward to robotics classes."
    },

    {
      name: "Meera Nair",
      role: "Academic Coordinator",
      quote:
        "Rezero Robotics brought practical STEM education into our classrooms in a way students truly enjoy."
    }
  ];

  return (
    <section id="testimonials" className="section">

      <div className="container">

        <h2>What Schools & Parents Say</h2>

        <p className="section-text">
          Real feedback from educators and parents.
        </p>

        <div className="testimonials-grid">

          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.name}>

              <div className="testimonial-top">

                <div className="testimonial-avatar">
                  👨‍🏫
                </div>

                <div>
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>

              </div>

              <p className="testimonial-quote">
                "{item.quote}"
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}