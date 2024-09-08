import React, {useEffect} from 'react'
import LeaderBoardHeroSection from '../components/LeaderBoardHeroSection/LeaderBoardHeroSection'
import NoticeSection from '../components/Notice/NoticeSection'
import LeaderboardList from '../components/LeaderboardList/LeaderboardList'

function Leaderboard() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
    <LeaderBoardHeroSection />
    <NoticeSection />
    <LeaderboardList />
    </>
  )
}

export default Leaderboard