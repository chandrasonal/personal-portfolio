import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "MyApp",
      description: "NodeJs, Express, OpenWeatherMap API",
      imgUrl: projImg1,
    },
    {
      title: "PokeePlanet",
      description: "ReactJs, Axios, PokeAPI",
      imgUrl: projImg2,
    },
    {
      title: "Student Auditorium Management System ",
      description: "C/C++, OOPS",
      imgUrl: projImg3,
    },
    {
      title: "Video Captioning",
      description: "LSTM, Seq2Seq, S2VT, MSVD",
      imgUrl: projImg4, 
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are some of the projects that i have completed.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Achievements/Certifications</Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Extra Curricular Activities
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Work Experience
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <h2>Python Mandatory Trendz</h2>
                    <p>Learnt about python basics, use case for data analysis as well as web‐development along with programming fundamentals like OOPs.</p>
                    <h2>COMPEX Scholarship</h2>
                    <p>Received an esteemed merit‐based fully-funded scholarship from the embassy of India.</p>
                    <h2> TOEFL Mastery - University of California, Irvine </h2>
                    <p>Completed a full online TOEFL mastery course offered by University of California, Irvine through coursera.</p>
                    <h2> NayePankh Foundation </h2>
                    <p>Selected for Summer Basic Training internship at NayePankh Foundation.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h2>Member - National Service Scheme</h2>
                      <p>I have been part of the youth organization and attended several camps with the aim to gain skills, develop social responsibility,etc.</p>
                      <h2>Basketball Tournament Winner</h2>
                      <p>Won the Everest Inter‐school Basketball Cup.</p>
                      </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                    <h2>Hitech Solutions and Services Pvt Ltd</h2>
                    <p>Interned as a Jr. Web developer at HiTech Solutions and Services Pvt. Ltd. Project planning, website related training and tasks, improvisa‐
                    tion of workplace, etc. were some of the tasks that my team and I were working on.</p>
                    <h2>The Sparks Foundation</h2>
                    <p>Interned at The Sparks Foundation as a Functin Web Developer and Designer. I got hands on experience with various web developement tools and vast array of knowledge about front-end development</p>
                    <h2> NayePankh Foundation </h2>
                    <p>Selected for Summer Basic Training internship at NayePankh Foundation.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
