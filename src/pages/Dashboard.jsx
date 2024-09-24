import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import AddBlock from '../components/AddBlock/AddBlock'
import QuestionTopicDropDown from '../components/QuestionTopicDropDown/QuestionTopicDropDown'
import Statistics from '../components/Statistics/Statistics'
import ProgrssBar from '../components/ProgressBar/ProgressBar'
import QuestionContainer from '../components/QuestinContainer/questionContainer'



function Home() {
  return (
    <>
     <HeroSection />
     <AddBlock />
     <Statistics />
     <ProgrssBar />
     <QuestionContainer />

    </>
  )
}

export default Home