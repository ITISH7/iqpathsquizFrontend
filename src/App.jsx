import { useState } from 'react'
import './App.css'
import Header from './componets/Header/header'
import HeroSection from './componets/HeroSection/HeroSection'
import { AuthProvider } from './context/AuthContext';
import AddBlock from './componets/AddBlock/AddBlock';
import ProgressBar from './componets/ProgressBar/ProgressBar';
import QuestionTopicDropDown from './componets/QuestionTopicDropDown/QuestionTopicDropDown';
import Footer from './componets/Footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Header />
      <HeroSection />
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
