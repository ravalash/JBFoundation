import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">

      <Container >
        <Row >
          <Col size="md-6">
            <p >Phone: <strong>215-278-9125</strong></p>
          </Col>
          <Col size="md-6">
            <p >Email: <a href={"mailto:admin@johnbuccifoundation.com"}>admin@johnbuccifoundation.com</a> </p>
            <p><a href={"https://www.facebook.com/jbuccifoundation"} >Facebook</a></p>
          </Col>

        </Row>
      </Container>

    </footer>
  );
}

export default Footer;
