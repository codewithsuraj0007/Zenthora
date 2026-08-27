import React from 'react'
import Hero from './subComponent/herosection'
import Category from './subComponent/category'
import TrustedByTeam from './subComponent/trustedByTeam' 
import Testimonials from './subComponent/testimonials'
import PricingSection from './subComponent/pricingSection'
import TrendingSection from './subComponent/trendingSection'
import PartnerSection from './subComponent/partnerSection'
import CertificateSection from './subComponent/certificateSection'
import ArticaleSection from './subComponent/articaleSection'
import CounterSection from './subComponent/counterSection'
import ContactUsSection from './subComponent/contactUsSection'
import TalentSection from './subComponent/talentSection'
import Footer from './footer'






const Home = () => {
  return (
    <>
    <Hero/>
    <Category/>
    <TrustedByTeam/>
    <TrendingSection/>
    <CounterSection/>
    <Testimonials/>
    <ContactUsSection/>
    <TalentSection/>
    <PricingSection/>
    <CertificateSection/>
    <PartnerSection/>
<ArticaleSection/>
<Footer/>
    </>
  )
}

export default Home
