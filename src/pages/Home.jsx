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
     <QuestionTopicDropDown subjectName={`Apptitude`} />
     <QuestionTopicDropDown subjectName={`QUANT`} />
     <QuestionTopicDropDown subjectName={`Data Structure`}/>
     <QuestionTopicDropDown subjectName={`AI`} />
     <QuestionTopicDropDown subjectName={`machine learning`} />
     <QuestionTopicDropDown subjectName={`Database`} />

    </>
  )
}

export default Home