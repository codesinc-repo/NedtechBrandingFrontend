import React from 'react'
import Hero from '../components/meettheteam/Hero'
import ContentTextImages from '../components/meettheteam/ResourcesDetail'
import FoundingFormSection from '../components/found50/FoundForm'
import IntegrationCard from '../components/home/IntegrationCard'
import HeroSection from '../components/home/Hero'
import TeamPhoto from '../assets/meetphoto.png'

const Resources = () => {
  return (
    <>
   <Hero
        title="Standard Content"
        description="We are a group of passionate individuals committed to revolutionizing automation. Our diverse backgrounds fuel our innovation."
        imageSrc={TeamPhoto}
      />
    <ContentTextImages/>
    <FoundingFormSection/>
    <IntegrationCard/>
    </>
  )
}

export default Resources