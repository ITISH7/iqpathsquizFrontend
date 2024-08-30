import './App.css'
import Header from './componets/Header/Header'
import Footer from './componets/Footer/Footer';
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>

  )
}

export default App
