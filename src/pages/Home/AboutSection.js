import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery.png";

const fakeData = [
    {
      image: Pizza,
      title: "Original",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Salad,
      title: "Qualty Foods",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
  ];
  
const AboutSection = () => {
  return (
    <>
         <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The Pizza tastes better when you eat it with your family</h2>
              <p>
                Porta semper lacus cursus, feugiat primis ultrice a ligula risus
                auctor an tempus feugiat dolor lacinia cubilia curae integer
                orci congue and metus integer primis in integer metus
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {fakeData.map((data, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={data.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{data.title}</h4>
                  <p>{data.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AboutSection