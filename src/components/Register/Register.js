import React, { useContext } from 'react'
import { StudentDataContext } from '../Student/StudentDataProvider'

const Register = () => {
  const { isLoggedIn } = useContext(StudentDataContext)

  return <>Register {isLoggedIn && <>Already Logged In</>}</>
}

export default Register
