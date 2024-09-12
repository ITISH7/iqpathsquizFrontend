import React from 'react'
import Sign from '../components/SignUp/SignUp'
import { useEffect } from 'react'

function Signup() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <Sign />
    </div>
  )
}

export default Signup