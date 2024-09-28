import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pizza from "../../assets/contact/pizza.png";
import Salad from "../../assets/contact/salad.png";
import Delivery from "../../assets/contact/delivery.png";
import "../../styles/ContactStyles.css"

const fakeData = [
    {
      image: Salad,
      title: "Qualty Foods",
      paragraph: `Enjoy your favourites in one of our pizzas. Enjoy a selection of new dishes for you perfect night in`,
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `From our iconic Dough Balls to our thin and crispy Romana pizzas, enjoy all your favourites at home.`,
    },
    {
      image: Pizza,
      title: "Cook At Home",
      paragraph: `Inspired by your favourite meals from our restaurants. Our At Home range available in supermarkets. Check out our vegan range!`,
    }
  ];
  
const ContactSection = () => {
  return (
    <>
         <section className="contact_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The Pizza tastes better when you eat it with your family</h2>
              <p>
                Book yourself a table. Whether it’s a casual dinner with friends or a special celebration, we can’t wait to serve you!
              </p>
              <Link to="/" className="btn order_now btn_red">
                Book A Table
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="contact_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {fakeData.map((data, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="contact_box text-center">
                  <div className="contact_icon">
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

export default ContactSection