import React from 'react'
import { Container } from 'react-bootstrap';
import Recipe1 from "../../assets/blog/recipe1.png"
import Recipe2 from "../../assets/blog/recipe2.png"

import "../../styles/BlogStyles.css"
import { Link } from 'react-router-dom';
export default function BlogSection() {
  return (
  <div className='py-5 blog_section'>
      <div className='text-center pb-5 blog_heading'>
      <h2 className='text-light'>Cook at home</h2>
            <p className="para">
            Discover our delicious pizzas, breads and dressings to enjoy at home.
            </p>
            <Link to="/" className="btn order_now">
                See The Full Range
              </Link>
      </div>
<Container className='w-75 p-5 border rounded recipe_section p-4'>
<div className='d-flex justify-center align-items-center'>
      <img src={Recipe1} className="img-fluid" alt="blog"/>
      <div>
        <h3 className='text-warning'>Frozen meals with pizza</h3>
        <p className='shadow-sm text-justify'>Be ready for anything with our new frozen range. With our tasty pizzas, finest pasta dishes and exceptional sides right where you need them (the freezer), now you can serve up pizzazz at a moments notice. Available at Tesco.</p>
      </div>
      </div>
        <div className='d-flex justify-center align-items-center'>
      <div className='text-end'>
        <h3 className='text-warning'>Restaurant Favourites</h3>
        <p className='text-justify shadow-sm'>Bring the pizzeria home and pick up our bigger, fancier and tastier Restaurant Favourites in your local supermarket. Made with fresh, authentic and thoughtfully sourced ingredients, you’ll find exciting new flavours to try, plus pizzas you know and love from dining at our Pizzerias.</p>
      </div>
      <img src={Recipe2} className="img-fluid" alt="blog"/>
      </div>
</Container>
      </div>
  )
}
