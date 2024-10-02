import React from 'react'
import Layout from '../../components/Layouts/Layout';
import HeroSection from './HeroSection'
import ContactSection from './ContactSection';
import MenuSection from './MenuSection';
import ClubSection from './ClubSection';
import BlogSection from './BlogSection';
import SidesSection from './SidesSection';

import "../../styles/HeroStyles.css";

function Home() {
  return (
    <>
<Layout>
  <HeroSection/>
  <MenuSection/>
  <ClubSection/>
  <SidesSection/>
  <BlogSection/>
  <ContactSection/>
</Layout>
    </>
  )
}

export default Home