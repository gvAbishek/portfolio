import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abishek </span>
            from <span className="purple"> Coimbatore, India.</span>
            <br />
            I am currently Studying MCA at Kumaraguru College of Technology.
            <br />
            I have completed  M.A. Sociology at Bharathiyar University and B.Sc Electronics at PSG College of Arts and Science
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "An Advanced Technology is indistinguishable from Magic!"{" "}
          </p>
          <footer className="blockquote-footer">Abishek</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
