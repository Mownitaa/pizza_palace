import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/menu/pizza1.jpg";
import Image2 from "../../assets/menu/pizza2.jpeg";
import Image3 from "../../assets/menu/pizza3.jpeg";
import Image4 from "../../assets/menu/pizza4.jpeg";
import Image5 from "../../assets/menu/pizza5.jpeg";
import Image6 from "../../assets/menu/pizza6.jpeg";
import Image7 from "../../assets/menu/pizza7.jpeg";
import Image8 from "../../assets/menu/pizza8.jpeg";
import MenuCards from "../../components/MenuCards";
import { Link } from "react-router-dom";
import "../../styles/MenuStyles.css";

const items = [
  {
    id: "0001",
    image: Image1,
    title: "Chicago Pizza",
    paragraph: "Chicken fries, chilli sauce, tomatoes, pickles",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "Beef, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 99.32,
  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph:
      "American cheese, tomato relish, avocado, black olive, red onion",
    rating: 4,
    price: 69.15,
  },
  {
    id: "0004",
    image: Image4,
    title: "Miami Pizza",
    paragraph: "Chicken, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 99.25,
  },
  {
    id: "0005",
    image: Image5,
    title: "Detroit Pizza",
    paragraph: "Sausage, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 59.25,
  },
  {
    id: "0006",
    image: Image6,
    title: "Roma Pizza",
    paragraph: "Olive, cheddar cheese, onion, bacon, tomatoes, pickles",
    rating: 3,
    price: 79.18,
  },
  {
    id: "0007",
    image: Image7,
    title: "California Pizza",
    paragraph: "Beef sausage, cheddar cheese, onion, tomatoes, pickles",
    rating: 2.5,
    price: 99.19,
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Pizza",
    paragraph: "Chicken, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
  },
];

// Rating Data
const ratingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function MenuSection() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>GET A TASTE OF NEW YORK THIS AUTUMN</h2>
            <p className="para">
              With our limited-edition menu of mouth-watering East Coast
              classics.
            </p>
          </Col>
        </Row>
        <Row>
          {items.map((cardData, index) => (
            <MenuCards
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              ratingIcons={ratingIcons}
            />
          ))}
        </Row>
        <div>
          <Link
            to="/menu"
            style={{ color: "var(--light-red)" }}
            className="d-flex justify-content-end align-items-center p-1"
          >
            <h4>
              View more<i className="bi bi-arrow-right ps-1"></i>
            </h4>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default MenuSection;
