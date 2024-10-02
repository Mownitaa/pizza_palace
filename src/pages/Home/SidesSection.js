import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'

import Burgers from "../../assets/menu/burger.png"
import Chowmein from "../../assets/menu/chowmein.png"
import Drinks from "../../assets/menu/drinks.png"
import Coffee from "../../assets/menu/coffee.png"
import MeatBox from "../../assets/menu/meatbox.png"
import Nachos from "../../assets/menu/nachhos.jpg"
import Momo from "../../assets/menu/momo.png"
import Shawrma from "../../assets/menu/shawrma.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    index:1,
    image: Burgers,
    title: "Burgers",
  },
  {
    index:2,
    image: Chowmein,
    title: "Chowmein",
  },
  {
    index:3,
    image: Drinks,
    title: "Drinks",
  },
  {
    index:4,
    image:Coffee,
    title:"Coffee",
  },
  {
    index:5,
    image:MeatBox,
    title:"Meat Box",
  },
  {
    index:6,
    image:Nachos,
    title:"Nachos",
  },
  {
    index:7,
    image:Momo,
    title:"Momo",
  },
  {
    index:8,
    image:Shawrma,
    title:"Shawrma",
  },
];
function SampleNextArrow(props) {
  const {  className,style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",background: "var(--brown)",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "var(--brown)",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}
function SidesSection() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  };
  return (
      <Container className='sides_section text-center py-5'>
      <h2>In Case your mood changes</h2>
      <p>Satisfy your hunger with out other items</p>
    <div className='p-5'>
    <Slider {...settings}>
        {items.map((item)=>(
           <div className='text-center'>
            <img src={item.image} className="p-3 w-100 rounded rounded-pill mb-4 mb-md-0" key={item.index} alt="Item"/>
            <p>{item.title}</p>
            </div>
          ))}
      </Slider>
    </div>
    </Container>
  )
}

export default SidesSection