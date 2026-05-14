import logo from "../../assets/images/logo.jpeg";

export default function Header() {

  return (

    <header className="header">

      <div className="container header-inner">

        {/* LOGO */}

        <div className="logo">

          <img
            src={logo}
            alt="Rezero Robotics Logo"
            className="logo-img"
          />

          <div className="logo-text">

            <span className="logo-title">
              Rezero Robotics
            </span>

            <span className="logo-subtitle">
              AI & Robotics Education
            </span>

          </div>

        </div>

        {/* NAVIGATION */}

        <nav className="nav">

          <a href="#hero">Home</a>

          <a href="#about">About</a>

          <a href="#curriculum">Curriculum</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </nav>

      </div>

    </header>
  );
}