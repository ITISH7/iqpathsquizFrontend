import React,{ useEffect }  from "react";
import ResultHeroSection from '../components/ResultHeroSection/ResultHeroSection'
import ResultDashboard from '../components/ResultDashboard/ResultDashboard'

function Result() {
  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
      <>
      <ResultHeroSection />
      <ResultDashboard />
      </>
    )
  }
  
  export default Result
  