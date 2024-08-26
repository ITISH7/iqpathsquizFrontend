import { useState } from 'react'
import './App.css'
import Header from './componets/Header/header'
import HeroSection from './componets/HeroSection/HeroSection'
import AddBlock from './componets/AddBlock/AddBlock';
import ProgressBar from './componets/ProgressBar/ProgressBar';
import QuestionTopicDropDown from './componets/QuestionTopicDropDown/QuestionTopicDropDown';
import Footer from './componets/Footer/Footer';
import LeaderBoardHeroSection from './componets/LeaderBoardHeroSection/LeaderBoardHeroSection';
import NoticeSection from './componets/Notice/NoticeSection';
import LeaderboardList from './componets/LeaderboardList/LeaderboardList';
import Statistics from './componets/Statistics/Statistics';
import { Outlet } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>

  )
}

export default App
