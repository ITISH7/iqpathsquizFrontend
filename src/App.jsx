import { useState } from 'react'
import './App.css'
import Header from './componets/Header/header'
import HeroSection from './componets/HeroSection/HeroSection'
import { AuthProvider } from './context/AuthContext';
import AddBlock from './componets/AddBlock/AddBlock';
import ProgressBar from './componets/ProgressBar/ProgressBar';
import QuestionTopicDropDown from './componets/QuestionTopicDropDown/QuestionTopicDropDown';
import Footer from './componets/Footer/Footer';
import LeaderBoardHeroSection from './componets/LeaderBoardHeroSection/LeaderBoardHeroSection';


function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Header />
      <LeaderBoardHeroSection />
      {/* <HeroSection /> */}
      <AddBlock />
      <ProgressBar />
      <QuestionTopicDropDown />
      <QuestionTopicDropDown />
      <QuestionTopicDropDown />
      <QuestionTopicDropDown />
      <QuestionTopicDropDown />
      <QuestionTopicDropDown />
      <QuestionTopicDropDown />
      <QuestionTopicDropDown />
      <Footer />
    </AuthProvider>
  )
}

export default App
