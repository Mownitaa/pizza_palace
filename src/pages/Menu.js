import React, { useState } from "react";
import Layout from "../components/Layouts/Layout";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";
import MenuBanner from "../assets/menu/menuBanner.png";
import Image1 from "../assets/menu/1.png";
import Image2 from "../assets/menu/2.png";
import Image3 from "../assets/menu/3.png";
import Image4 from "../assets/menu/4.png";
import Image5 from "../assets/menu/5.png";
import Image6 from "../assets/menu/6.png";
import Image7 from "../assets/menu/7.png";
import Image8 from "../assets/menu/8.png";
import Image9 from "../assets/menu/9.png";
import Image10 from "../assets/menu/10.png";
import Image11 from "../assets/menu/11.png";
import Image12 from "../assets/menu/12.png";
import { Link } from "react-router-dom";

// items list
const menuItems = [
  {
    id: "0001",
    image: Image1,
    title: "Chicago Pizza",
    price: 9.15,
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    price: 9.32,
  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    price: 6.15,
  },
  {
    id: "0004",
    image: Image4,
    title: "Miami Pizza",
    price: 7.25,
  },
  {
    id: "0005",
    image: Image5,
    title: "Detroit Pizza",
    price: 5.25,
  },
  {
    id: "0006",
    image: Image6,
    title: "Roma Pizza",
    price: 3.18,
  },
  {
    id: "0007",
    image: Image7,
    title: "California Pizza",
    price: 2.19,
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Pizza",
    price: 8.12,
  },
  {
    id: "0008",
    image: Image9,
    title: "Sausage Blast",
    price: 83.12,
  },
  {
    id: "0008",
    image: Image10,
    title: "Beef Buffiano",
    price: 4.05,
  },
  {
    id: "0008",
    image: Image11,
    title: "Meat Heaven",
    price: 2.12,
  },
  {
    id: "0008",
    image: Image12,
    title: "Naga Sausage",
    price: 3.12,
  },
];

function Menu() {
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10);
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const handleRangeChange = (e) => {
    const { name, value } = e.target;

    if (name === "minPrice") {
      setMinPrice(Number(value));
    } else if (name === "maxPrice") {
      setMaxPrice(Number(value));
    }
  };
  // Filter items when range changes or form is submitted
  const filterItems = () => {
    const filtered = menuItems.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    setFilteredItems(filtered);
  };
  const handleApplyFilter = (e) => {
    e.preventDefault();
    // You can filter your items here based on the minPrice and maxPrice
    filterItems(); // Apply the filter when the form is submitted
    console.log("Filter applied:", { minPrice, maxPrice });
  };
  const handleResetFilter = (e) => {
    e.preventDefault();
    setFilteredItems(menuItems);
  };
  return (
    <Layout>
      <section
        style={{
          position: "relative",
          backgroundImage: `url(${MenuBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          paddingTop: "160px",
          paddingBottom: "90px",
        }}
      >
        <div className="text-center">
          <h1 className="text-light">Shop</h1>
          <p style={{ color: "var(--light-grey-2)" }}>Delicious</p>
        </div>
      </section>
      <div style={{ backgroundColor: "var(--light-white)" }}>
        <Container>
          <div className="d-block d-md-none mt-2">
            <Button
              onClick={openModal}
              className="w-100"
              style={{
                backgroundColor: "var(--yellow)",
                color: "var(--bg-coffee)",
                borderColor: "white",
                fontWeight: "500",
                fontSize: "1.3rem",
              }}
            >
              <span className="d-flex flex-direction-col align-items-center justify-content-center">
                Filter By Price <i className="bi bi-filter fs-1 ps-2"></i>
              </span>
            </Button>
          </div>
          <div className="pb-5 d-flex justify-content-center align-center">
            <div className="w-75 pe-0 pe-md-5">
              <div>
                <Row>
                  {!filteredItems.length ? (
                    <h1 style={{ color: "#e3000e" }} className="mt-5">
                      No Items AVailable
                    </h1>
                  ) : (
                    <>
                      {filteredItems.map((item, index) => (
                        <Col
                          className="text-center px-2 py-5"
                          key={index}
                          sm={6}
                          md={4}
                          lg={4}
                        >
                          <img
                            className="img-fluid"
                            src={item.image}
                            alt="menu"
                          />
                          <div className="mt-3">
                            <h5>{item.title}</h5>
                            <p
                              style={{
                                color: "var(--bg-coffee)",
                              }}
                            >
                              ${item.price}
                            </p>
                            <Link to="/">
                              <Button
                                style={{
                                  backgroundColor: "var(--bg-coffee)",
                                  color: "var(--yellow)",
                                  borderColor: "white",
                                  fontWeight: "500",
                                  fontSize: "1rem",
                                }}
                              >
                                <i className="bi bi-bag me-2"></i>
                                Add To Cart
                              </Button>
                            </Link>
                          </div>
                        </Col>
                      ))}
                    </>
                  )}
                </Row>
              </div>
            </div>

            {/* filter  */}
            {modal && (
              <div className="d-none d-md-block py-5">
                <Card>
                  <Card.Body>
                    <h4 style={{ color: "var(--bg-coffee)" }} className="mb-4">
                      Filter by Price
                    </h4>
                    <Form>
                      <Form.Group
                        className="d-flex align-items-center pb-2"
                        as={Row}
                      >
                        <Form.Label column sm={4}>
                          Min Price
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="number"
                            name="minPrice"
                            value={minPrice}
                            min="1"
                            max={maxPrice}
                            onChange={handleRangeChange}
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group
                        className="d-flex align-items-center pb-2"
                        as={Row}
                      >
                        <Form.Label column sm={4}>
                          Max Price
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="number"
                            name="maxPrice"
                            value={maxPrice}
                            min={minPrice}
                            onChange={handleRangeChange}
                          />
                        </Col>
                      </Form.Group>
                      <div>
                        <p>
                          Selected Range: ${minPrice} - ${maxPrice}
                        </p>
                      </div>
                      <div className="pb-2">
                        <Button
                          onClick={handleApplyFilter}
                          className="w-100"
                          style={{
                            backgroundColor: "var(--bg-coffee)",
                            color: "var(--yellow)",
                            borderColor: "white",
                            fontWeight: "500",
                            fontSize: "1rem",
                          }}
                        >
                          Apply Filter
                        </Button>
                      </div>
                      <div>
                        <Button
                          onClick={handleResetFilter}
                          className="w-100"
                          style={{
                            backgroundColor: "var(--white)",
                            color: "var(--bg-coffee)",
                            borderColor: "var(--bg-coffee)",
                            fontWeight: "500",
                            fontSize: "1rem",
                          }}
                        >
                          Reset
                        </Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
                <Card className="mt-4">
                  <Card.Body>
                    <h4 style={{ color: "var(--bg-coffee)" }} className="mb-4">
                      Our Best Sellers
                    </h4>
                    {menuItems.map((item, index) => (
                      <div
                        key={index}
                        className="d-flex justify-content-between align-items-center"
                      >
                        <div className="w-auto">
                          <h6>{item.title}</h6>
                          <p>{item.price}</p>
                        </div>
                        <div className="d-flex justify-content-end">
                          <img
                            style={{ width: "30%" }}
                            src={item.image}
                            alt={item.name}
                          />
                        </div>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </div>
            )}
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export default Menu;
