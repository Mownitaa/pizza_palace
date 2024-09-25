import React from 'react'
import Layout from '../../components/Layouts/Layout';
import "../../styles/HomeStyles.css";
import HeroSection from './HeroSection'
import AboutSection from './AboutSection';

function Home() {
  return (
    <>
<Layout>
  <HeroSection/>
  <AboutSection/>
</Layout>
    </>
  )
}

export default Home