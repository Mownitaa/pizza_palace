import React, {useState} from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "../../styles/HeaderStyles.css"
import { Link } from 'react-router-dom'
import Logo from '../../assets/pizza-palace-logo.png'
function Header() {
  const [nav, setNav] = useState();

  //scroll navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
   <header>
  <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}
  >
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className='logo'>
          <img className='img-fluid' src={Logo} alt='Logo'/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/menu' >Our Menu</Nav.Link>
            <Nav.Link as={Link} to='/club' >PizzaPalace Club</Nav.Link>
            <Nav.Link as={Link} to='/blog' >Cook At Home</Nav.Link>
            <Nav.Link as={Link} to='/contact' >Contact Us</Nav.Link>
            <Nav.Link as={Link} to='/' >
            <div className='cart'>
            <i className="bi bi-basket fs-5"></i>
            <em className='roundpoint'>2</em>
            </div>
            </Nav.Link>
          </Nav>       
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
  )
}

export default Header