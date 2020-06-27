import React, { lazy, useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import request from 'axios'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

import { lazyLoad } from '../Loader/Loader'
import { StudentDataContext } from '../Student/StudentDataProvider'
import { API_DATA } from '../../config'

const CourseContentCard = lazy(() => import('./CourseContentCard'))

const Dashboard = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    studentName,
    studentId,
    studentData,
    setStudentData,
    setStudentId,
    setStudentName
  } = useContext(StudentDataContext)

  useEffect(() => {
    if (isLoggedIn)
      request
        .get(`${API_DATA}/${studentId}`)
        .then(res => res.data)
        .then(res => {
          setStudentData(res.data)
          setStudentId(res._id)
          setStudentName(res.username)
          setIsLoggedIn(true)
        })
        .catch(err => {
          if (err.response) {
            localStorage.clear()
            setIsLoggedIn(false)
          }
        })
  }, [
    isLoggedIn,
    studentId,
    setIsLoggedIn,
    setStudentData,
    setStudentId,
    setStudentName
  ])

  const onCardContentChange = (_id, newStudentData) =>
    setStudentData(
      studentData.map(data => (data._id === _id ? newStudentData : data))
    )

  if (isLoggedIn)
    return (
      <MDBContainer>
        <MDBRow className='justify-content-center'>
          {studentName && (
            <p className='h5 text-center mb-4'>
              Assalaamu'alaikum, {studentName}
            </p>
          )}
        </MDBRow>
        <MDBRow className='justify-content-center'>
          <MDBCol>
            <>
              {lazyLoad(
                studentData.map((data, i) => (
                  <CourseContentCard
                    key={i}
                    title={`Lecture ${i + 1}`}
                    data={data}
                    onChange={onCardContentChange}
                  />
                ))
              )}
            </>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  return <Redirect to='/login' />
}

export default Dashboard
