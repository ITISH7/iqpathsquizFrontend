import React,{ useEffect }  from "react";
import ResultNextHeroSection from '../components/ResultNextHeroSection/ResultNextHeroSection'
import ResultNextDashboard from '../components/ResultNextDashboard/ResultNextDashboard'

function Result() {
  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
      <>
      <ResultNextHeroSection />
      <ResultNextDashboard />
      </>
    )
  }
  
  export default Result
  