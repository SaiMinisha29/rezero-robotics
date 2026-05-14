import { Player } from "@lottiefiles/react-lottie-player";

import robotAnimation from "../../assests/animations/roboticanimation.json";

export default function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="container hero-content">

        {/* LEFT SIDE */}

        <div className="hero-text">

          <h1>
            Rezero Robotics
          </h1>

          <p>
            Building Tomorrow’s Engineers — Starting Today!    
          <br />
            Rezero Robotics provides NEP 2020 aligned
            Robotics and AI curriculum for CBSE schools
            through hands-on practical learning,
            innovation, and real-world projects.
          </p>

          <div className="hero-buttons">

            <a
              href="#book-demo"
              className="primary-btn"
            >
              Book Free Demo
            </a>

            <a
              href="#curriculum"
              className="secondary-btn"
            >
              Explore Curriculum
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-image">

          <Player
            autoplay
            loop
            src={robotAnimation}
            style={{
              height: "500px",
              width: "500px"
            }}
          />

        </div>

      </div>

    </section>
  );
}