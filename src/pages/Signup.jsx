import React from 'react'
import Sign from '../components/SignUp/SignUp'

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