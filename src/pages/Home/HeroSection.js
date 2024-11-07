import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../../assets/hero/hero-img.png";
import { Link } from "react-router-dom";
import "../../styles/HeroStyles.css";

const HeroSection = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Pizza} className="hero_img img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">$3.99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Pizza</h1>
              <h2 className="text-white">With Extra Cheese</h2>
              <p className="text-white pt-2 pb-4">
                Join the PizzaPalace Club to enjoy access to exclusive offers
                and irresistible rewards, like free food and drinks every time
                you dine.
              </p>
              <Link to="/menu" className="btn order_now">
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
