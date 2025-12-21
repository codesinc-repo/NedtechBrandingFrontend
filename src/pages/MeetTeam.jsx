import React from 'react'
import TeamPhoto from '../assets/meetphoto.png'
import Hero from '../components/meettheteam/Hero'
import CompanySection from '../components/meettheteam/ComanySection'
import IntegrationCard from '../components/home/IntegrationCard'
import ProcessSection from '../components/home/Process'
import FAQ from '../components/home/Faq'
import Footer from '../layouts/Footer'

const MeetTeam = () => {
  return (
    <>
    <Hero 
        title="Meet the team"
        description="We are a group of passionate individuals committed to revolutionizing automation. Our diverse backgrounds fuel our innovation."
        imageSrc={TeamPhoto}
      />
      <CompanySection/>
      <IntegrationCard/>
      <ProcessSection/>
      <FAQ/>
       
      </>
  )
}

export default MeetTeam