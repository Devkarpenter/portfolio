import './Home.css';


function Home() {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi,<br />
          I'm <span className="home__title-color">Devesh karpentar</span><br />
          Web Developer
        </h1>
        <a href="#contact" className="button">Hire Me</a>
      </div>

      <div className="home__social">
        <a href="https://www.linkedin.com/in/devesh-karpentar-975309255/" className="home__social-icon"><i className="fa-brands fa-linkedin"></i></a>
        <a href="https://mail.google.com/mail/u/0/#sent?compose=new" className="home__social-icon"><i className="fa-solid fa-at"></i></a>
        <a href="https://github.com/Devkarpenter" className="home__social-icon"><i className="fa-brands fa-github"></i></a>
      </div>

      {/* Image Section
      <div className="home__img">
        <img src={profileImg} alt="Devesh Karpentar" />
      </div> */}


    </section>
  );
}

export default Home;