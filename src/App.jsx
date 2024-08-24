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
import NoticeSection from './componets/Notice/NoticeSection';
import LeaderboardList from './componets/LeaderboardList/LeaderboardList';
import Statistics from './componets/Statistics/Statistics';


function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Header />
      <LeaderBoardHeroSection />
      <NoticeSection />
      {/* <HeroSection /> */}
      <AddBlock />
      <Statistics />
      <ProgressBar />
      <QuestionTopicDropDown />
      <QuestionTopicDropDown />
      <QuestionTopicDropDown />
      <QuestionTopicDropDown />
      <QuestionTopicDropDown />
      <QuestionTopicDropDown />
      <QuestionTopicDropDown />
      <QuestionTopicDropDown />
      <LeaderboardList />
      <Footer />
    </AuthProvider>
  )
}

export default App
