import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import { StudentDataContext } from './Student/StudentDataProvider'

const Logout = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    setStudentId,
    setStudentName,
    setStudentData
  } = useContext(StudentDataContext)

  useEffect(() => {
    return () => {
      localStorage.clear()
      if (isLoggedIn) {
        setStudentId('')
        setStudentName('')
        setStudentData('')
        setIsLoggedIn(false)
      }
    }
  }, [])

  return <Redirect to='/login' />
}

export default Logout
