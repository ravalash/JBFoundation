import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";



function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/5holYB6.jpg">

      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row className="row mb-3">
          <Col size="md-12">
            <h1 >The John Bucci Memorial Foundation</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h2 className="mb-3">Mission Statement</h2>
            <p>
              The John Bucci Memorial Foundations provides opportunities for local at risk children to access the educational, physical and emotional benefits of athletics.
            </p>
            <p>
              Born Oct. 14, 1962 to the late John and Carmen Cruz Bucci, John graduated from Western Wayne High School in 1980. From there, he tirelessly pursued his career in the basketball industry. John was passionate about the sport and sharing that passion with others. In his early days at Camp St. Andrew and Keystone College, he showed a great knowledge of the game. Stints at St. Paul's grade school and Bishop Hannan High School as their freshman coach produced championship seasons, however, his career as a head coach of Bishop Hannan's varsity team catapulted him to stardom. John built the program into a basketball powerhouse, guiding the Lancers to the 1999 and 2000 Class A title games, and finally securing a championship in the 2002 Class AA State title game. While winning many other league and district titles, he simultaneously operated his AAU basketball program. From its infancy in the early '90s as a local league with occasional away trips, he dedicated countless hours to build a successful organization. His JB Hoops teams are now some of the most notable AAU teams on the East Coast, while his Backcourt Hoops organization has nearly 100 teams.
            </p>
            <p>
              Coach, Bucci, or "Booch," as he was affectionately known by many, shaped and molded local high school basketball players over the last 30 years. Whether you were a NEPA Sharpshooter, JB Hooper, NEPA Flame or a player at a local high school, he touched your life in one way or another. Known for his quick-wit, wisdom and kind smile, John was a larger than life figure who lived and breathed basketball. Following his career at Bishop Hannan, he could still be found at many local games, whether it be as a spectator or broadcasting it on radio. He eventually returned to the sidelines as Abington Heights High School's girls coach for a year, and continued to work at Excalibur Insurance. While basketball played a large role in his life, John was much more than a coach. He brought joy and humor to family gatherings and took great pride in helping others, especially those in need. He was also a tireless worker for Battaglia's Sporting Goods and greatly enjoyed educating the children of St. Paul's School through health and physical education. John's presence will be sorely missed by all who knew him.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
