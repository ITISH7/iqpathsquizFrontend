import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import AddBlock from '../components/AddBlock/AddBlock'
import QuestionTopicDropDown from '../components/QuestionTopicDropDown/QuestionTopicDropDown'
import Statistics from '../components/Statistics/Statistics'
import ProgrssBar from '../components/ProgressBar/ProgressBar'



function Home() {
  return (
    <>
     <HeroSection />
     <AddBlock />
     <Statistics />
     <ProgrssBar />
     <QuestionTopicDropDown name={`Apptitude`} />
     <QuestionTopicDropDown name={`QUANT`} />
     <QuestionTopicDropDown name={`Data Structure`}/>
     <QuestionTopicDropDown name={`AI`} />
     <QuestionTopicDropDown name={`machine learning`} />
     <QuestionTopicDropDown name={`Database`} />

    </>
  )
}

export default Home