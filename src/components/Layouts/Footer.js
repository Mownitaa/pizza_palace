import React from 'react'
import Driver from "../../assets/footer/fries.jpg"
import PlayStore from "../../assets/footer/google-play.png"
import { Container } from 'react-bootstrap'
function Footer() {
  return (
    <Container className='px-3 pt-5 footer_section'>
              <div className='d-flex justify-content-between align-items-center pt-5'>
          <div>
          <h4 className='fw-normal'>Download The Mobile App</h4>
          <h1 className='fw-medium'>To Avail 20% Discount</h1>
<img className='img-fluid' src={PlayStore} alt='playStore'/>
          </div>
<img className='w-50 img-fluid' src={Driver} alt='driver'/>

        </div>
      <hr/>
    <div className='py-5 d-flex justify-content-between align-items-start'>
<div>
  <h5>Food</h5>
  <p>Menu</p>
  <p>Collection</p>
  <p>Delivery</p>
  <p>Cook at Home</p>
  <p>Nutritionals</p>
</div>
<div>
  <h5>Bookings</h5>
  <p>Offers</p>
  <p>Book A Table</p>
</div>
<div>
  <h5>Music</h5>
  <p>PizzaPalace Live</p>
  <p>PX Records</p>
  <p>Apple Music</p>
</div>
<div>
  <h5>More</h5>
  <p> Contact Us</p>
  <p>About Us</p>
  <p>Careers</p>
  <p>Sustainability</p>
  <p>Our Responsibilities</p>
  <p>Company News</p>
</div>
        <div>
        <i className="fs-3 pb-5 bi bi-whatsapp"></i><br/>
        <i className="fs-3 pb-5 bi bi-facebook"></i><br/>
        <i className="fs-3 pb-5 bi bi-twitter"></i><br/>
        <i className="fs-3 pb-5 bi bi-threads-fill"></i><br/>
        <i className="fs-3 pb-5 bi bi-linkedin"></i><br/>
        <i className="fs-3 pb-5 bi bi-youtube"></i><br/>
        </div>
    </div>
    <hr/>
    <div>
      <p><i class="bi bi-c-circle-fill"></i> PizzaPalace 2024 | mabiazaman07@gmail.com</p>
    </div>
    </Container>
  )
}

export default Footer