import React from 'react'
import Layout from '../../components/Layouts/Layout';
import "../../styles/HeroStyles.css";
import HeroSection from './HeroSection'
import ContactSection from './ContactSection';
import MenuSection from './MenuSection';
import ClubSection from './ClubSection';
import BlogSection from './BlogSection';

function Home() {
  return (
    <>
<Layout>
  <HeroSection/>
  <MenuSection/>
  <ClubSection/>
  <BlogSection/>
  <ContactSection/>
</Layout>
    </>
  )
}

export default Home