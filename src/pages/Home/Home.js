import React from 'react'
import Layout from '../../components/Layouts/Layout';
import "../../styles/HomeStyles.css";
import HeroSection from './HeroSection'
import AboutSection from './AboutSection';
import MenuSection from './MenuSection';
import ShopSection from './ShopSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';

function Home() {
  return (
    <>
<Layout>
  <HeroSection/>
  <AboutSection/>
  <MenuSection/>
  <ShopSection/>
  <BlogSection/>
  <ContactSection/>
</Layout>
    </>
  )
}

export default Home