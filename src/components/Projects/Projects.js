import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import we from "../../Assets/Projects/web.jpg";
import twit from "../../Assets/Projects/twitter.jpg";
import inv from "../../Assets/Projects/inv.jpg";
import gol from "../../Assets/Projects/go.jpg";
import alex from "../../Assets/Projects/alexa.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inv}
              isBlog={false}
              title="ExamCell Inventory Management System"
              description="An ExamCell Inventory Management System Application developed Using MERN Stack. The Application can add,delete,update and display the products in the Inventory. It also allows user to download the list in the form of CSV."
              ghLink="https://github.com/gvAbishek/examcell"
              demoLink="https://kumaragurudtsteam-my.sharepoint.com/:b:/g/personal/abishek_23mca_kct_ac_in/EX2JYHhXnIdNj0HeMlZDhmwBJExeaD-9qr2_9Eci8nP6dQ?e=kYRkiJ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alex}
              isBlog={false}
              title="Home Automation using ALEXA"
              description="A comprehensive Home Automation IoT project leveraging Arduino IoT Cloud and integrated with Amazon's Alexa, enabling seamless voice control, enhanced smart home management, and real-time monitoring for an improved user experience."
              ghLink="https://github.com/gvAbishek/alexiot"
              demoLink="https://kumaragurudtsteam-my.sharepoint.com/:b:/g/personal/abishek_23mca_kct_ac_in/ERyzYhdYf-NNh-u4JV_JjI4BrBqjmvdc-YMfwzt5W30SGQ?e=C7NyRa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twit}
              isBlog={false}
              title="Twitter Sentimental Analysis"
              description="The Research study The Role of Twitter in Mobilising the Social Movement- A Sociological Study. This project used Python to scrap the content from Twitter."
              ghLink="https://github.com/gvAbishek/pypro"
              demoLink="https://kumaragurudtsteam-my.sharepoint.com/:b:/g/personal/abishek_23mca_kct_ac_in/EbnYnFPC2xFEkbLcgNlek-gBH1QS-_z14pnZlK6_9BAXOQ?e=MUMBzi"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={we}
              isBlog={false}
              title="Splendid Academy Website"
              description="This Freelance project involved developing a static website using WordPress, providing a  user-friendly experience. The website features clean, modern design elements and responsive layouts to ensure optimal viewing on all devices. Custom themes and plugins were implemented to enhance functionality and meet specific client needs."
              ghLink="https://github.com/gvAbishek/web-host"
              demoLink="https://splendidacademy.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gol}
              isBlog={false}
              title="Email Verifier Tool"
              description="An Email Verifier tool developed using the GO language efficiently validates email addresses.Developed using GO Language, the tool ensures rapid and accurate verification. Its robust error handling and detailed reporting enhance reliability and user experience."
              ghLink="https://github.com/gvAbishek/mailver"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
