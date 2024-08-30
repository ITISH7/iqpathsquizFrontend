import React from 'react'
import HeroSection from '../componets/HeroSection/HeroSection'
import AddBlock from '../componets/AddBlock/AddBlock'
import QuestionTopicDropDown from '../componets/QuestionTopicDropDown/QuestionTopicDropDown'
import Statistics from '../componets/Statistics/Statistics'
import ProgrssBar from '../componets/ProgressBar/ProgressBar'



function Home() {
  return (
    <>
     <HeroSection />
     <AddBlock />
     {/* <Statistics /> */}
     <ProgrssBar />
     {/* <QuestionTopicDropDown name={`Apptitude`} />
     <QuestionTopicDropDown name={`QUANT`} />
     <QuestionTopicDropDown name={`Data Structure`}/>
     <QuestionTopicDropDown name={`AI`} />
     <QuestionTopicDropDown name={`machine learning`} />
     <QuestionTopicDropDown name={`Database`} /> */}

    </>
  )
}

export default Home