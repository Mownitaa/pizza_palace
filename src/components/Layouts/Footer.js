import React from "react";
import Fries from "../../assets/footer/fries.jpg";
import PlayStore from "../../assets/footer/google-play.png";
import { Col, Container, Row } from "react-bootstrap";
function Footer() {
  return (
    <Container className="px-3 pt-5 footer_section">
      <div className="d-flex justify-content-between align-items-center pt-5">
        <div>
          <h4 className="fw-normal">Download The Mobile App</h4>
          <h1 className="fw-medium">To Avail 20% Discount</h1>
          <img className="img-fluid" src={PlayStore} alt="playStore" />
        </div>
        <img
          className="d-none d-sm-block w-50 img-fluid"
          src={Fries}
          alt="Fries"
        />
      </div>
      <hr />
      <Row>
        {/* food section */}
        <Col xs={6} sm={6} md={3} lg={3}>
          <h5>Food</h5>
          <p>Menu</p>
          <p>Collection</p>
          <p>Delivery</p>
          <p>Cook at Home</p>
          <p>Nutritionals</p>
        </Col>
        {/* booking section */}
        <Col xs={6} sm={6} md={3} lg={3}>
          <h5>Bookings</h5>
          <p>Offers</p>
          <p>Book A Table</p>
        </Col>
        {/* music section */}
        <Col className="mt-4 mt-md-0" xs={6} sm={6} md={3} lg={3}>
          <h5>Music</h5>
          <p>PizzaPalace Live</p>
          <p>PX Records</p>
          <p>Apple Music</p>
        </Col>
        {/* more section */}
        <Col className="mt-4 mt-md-0" xs={6} sm={6} md={3} lg={3}>
          <h5>More</h5>
          <p> Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Sustainability</p>
          <p>Our Responsibilities</p>
          <p>Company News</p>
        </Col>
      </Row>
      <hr />
      <div className="d-block d-md-flex justify-content-between align-items-center">
        <p>
          <i className="bi bi-c-circle-fill"></i> PizzaPalace 2024 |
          mabiazaman07@gmail.com
        </p>
        {/* icons section */}
        <div className="d-flex">
          <i className="fs-6 pe-2 bi bi-facebook"></i>
          <br />
          <i className="fs-6 pe-2 bi bi-twitter"></i>
          <br />
          <i className="fs-6 pe-2 bi bi-threads-fill"></i>
          <br />
          <i className="fs-6 pe-2 bi bi-linkedin"></i>
          <br />
          <i className="fs-6 pe-2 bi bi-youtube"></i>
          <br />
        </div>
      </div>
    </Container>
  );
}

export default Footer;
