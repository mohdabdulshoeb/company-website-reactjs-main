function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            3007 is a strategic design and technology firm dedicated to accelerating digital transformation and crafting exceptional experiences.
Founded on 30.07.2021, our journey has been defined by our commitment to shaping digital services, brand experiences, and innovative solutions. We design with a focus on what's meaningful to our clients and people, translating it into tangible and value-driven results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
