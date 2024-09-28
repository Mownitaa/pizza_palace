import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ClubReward from "../../assets/club/club.png"
import { Link } from 'react-router-dom'
import "../../styles/ClubStyles.css"
function ClubSection() {
  return (
    <Container className='club_section'>
      <Row>
      <Col lg={7} className="mb-5 mb-lg-0">
      <img src={ClubReward} className="hero_img img-fluid" alt="Hero" />
      </Col>
      <Col lg={5} className="mb-5 mb-lg-0">
      <h2>YOUR REWARDS. OUR TREAT.</h2>
      <p>Join the PizzaExpress Club to enjoy access to exclusive offers and irresistible rewards, like free food and drinks every time you dine .</p>
      <Link to="/" className="btn order_now btn_red">
                Find Out More
              </Link>
      </Col>
        </Row>
    </Container>
  )
}

export default ClubSection