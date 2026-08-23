import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <span className="badge-soft">Full Stack Developer</span>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Naman Dubey</strong>
              </h1>

              <div style={{ padding: "1rem 0 0", textAlign: "left" }}>
                <Type />
              </div>

              <div className="home-buttons">
                <Link to="/about" className="btn btn-primary">
                  About Me
                </Link>

                <Link to="/resume" className="btn btn-outline-light">
                  Resume
                </Link>
              </div>
            </Col>

            <Col md={5} className="home-visual" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-illustration"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
