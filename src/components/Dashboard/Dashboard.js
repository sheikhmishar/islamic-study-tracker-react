import React, { lazy, useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import request from 'axios'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBInput,
  MDBBtn
} from 'mdbreact'

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
          if (res) {
            if (
              typeof res.message != 'undefined' &&
              res.message.includes('Error')
            ) {
              localStorage.clear()
              setIsLoggedIn(false)
            } else {
              setStudentData(res.data)
              setStudentId(res._id)
              setStudentName(res.username)
              setIsLoggedIn(true)
            }
          }
        })
  }, [])

  if (isLoggedIn)
    return (
      <MDBContainer>
        <MDBRow className='justify-content-center'>
          <p className='h5 text-center mb-4'>
            Assalaamu'alaikum, {studentName}
          </p>
        </MDBRow>
        <MDBRow className='justify-content-center'>
          <MDBCol>
            <>
              {lazyLoad(
                studentData.map((data, i) => (
                  <CourseContentCard
                    key={i}
                    id={data._id}
                    title={`Lecture ${i + 1}`}
                    contentId={data.contentId}
                    lastPosition={data.videoEndPosition}
                    data={data}
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
