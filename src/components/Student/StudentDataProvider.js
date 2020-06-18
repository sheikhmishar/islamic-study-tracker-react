import React, { useState, useEffect, createContext } from 'react'

const DEFAULT = {
  studentName: '',
  setStudentName: studentName => {},
  studentId: '',
  setStudentId: studentId => {},
  isLoggedIn: false,
  setIsLoggedIn: isLoggedIn => {},
  studentData: {},
  setStudentData: studentData => {}
}

export const StudentDataContext = createContext(DEFAULT)

export const StudentDataProvider = props => {
  const [studentId, setStudentId] = useState(DEFAULT.studentId)
  const [studentName, setStudentName] = useState(DEFAULT.studentName)
  const [isLoggedIn, setIsLoggedIn] = useState(DEFAULT.isLoggedIn)
  const [studentData, setStudentData] = useState(DEFAULT.studentName)

  useEffect(() => {
    const alreadyLoggedIn = localStorage.getItem('studentLoggedIn') === 'true'
    if (alreadyLoggedIn) {
      setIsLoggedIn(true)
      const loggedInStudentId = localStorage.getItem('loggedInStudentId')
      setStudentId(loggedInStudentId)
    }
  }, [])

  return (
    <StudentDataContext.Provider
      value={{
        studentId,
        setStudentId,
        studentName,
        setStudentName,
        isLoggedIn,
        setIsLoggedIn,
        studentData,
        setStudentData
      }}>
      {props.children}
    </StudentDataContext.Provider>
  )
}
