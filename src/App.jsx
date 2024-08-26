import { useState } from 'react'
import './App.css'
import Header from './componets/Header/header'
import Footer from './componets/Footer/Footer';
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
