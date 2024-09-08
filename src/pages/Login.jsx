import React, {useEffect} from 'react'
import Log from '../components/Login/Login'


function Login() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  return (
    <div>
        <Log />
    </div>
  )
}

export default Login