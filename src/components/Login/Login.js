import React, { useContext, useEffect } from 'react'
import request from 'axios'

import { API_AUTH, API_DATA } from '../../config'
import { StudentDataContext } from '../Student/StudentDataProvider'

const Login = () => {
  const { isLoggedIn } = useContext(StudentDataContext)
  useEffect(() => {
    request(`${API_DATA}/`)
      .then(res => res.data)
      .then(res => console.log(res))
  }, [])

  return <>Login {isLoggedIn && <>Already Logged In</>}</>
}

export default Login
