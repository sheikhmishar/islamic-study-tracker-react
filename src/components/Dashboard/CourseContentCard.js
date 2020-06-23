import React, { useState, useEffect, useContext } from 'react'
import YoutubeVideo from './YoutubeVideo'
import request from 'axios'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBInput,
  MDBBtn,
  MDBCollapse
} from 'mdbreact'

import { StudentDataContext } from '../Student/StudentDataProvider'
import { API_DATA } from '../../config'

const CourseContentCard = props => {
  const { studentId } = useContext(StudentDataContext)
  const { title, data } = props
  const { _id, contentId, videoEndPosition, finished, startedAt } = data

  const [collapseId, setCollapseId] = useState('')
  const [shouldOpenYoutube, setShouldopenYoutube] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(videoEndPosition)

  useEffect(() => {
    if (!collapseId)
      setTimeout(() => {
        setShouldopenYoutube(false)
      }, 1000)
    else
      setTimeout(() => {
        setShouldopenYoutube(true)
      }, 500)
  }, [collapseId])

  useEffect(() => {
    request
      .put(`${API_DATA}/${studentId}/data`, {
        _id,
        videoEndPosition: elapsedTime,
        contentId,
        startedAt
      })
      .then(res => res.data)
      .then(res => {})
  }, [elapsedTime])

  const toggleCollapse = newCollapseId =>
    setCollapseId(collapseId !== newCollapseId ? newCollapseId : '')

  const onPlayButtonClicked = () => toggleCollapse('youtube-video')

  return (
    <MDBCard wide className='my-3 py-3'>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='4'>
            <i className='fa fa-chalkboard'></i> {title}
          </MDBCol>
          {/* <MDBCol sm='6' md='3' xl='2'>
            <i className='fa fa-clock'></i> Duration: 35:12
          </MDBCol> */}
          <MDBCol sm='6' md='3' xl='2'>
            <i className='far fa-clock'></i> Watched: {elapsedTime}s
          </MDBCol>
          <MDBCol sm='6' md='2' xl='2'>
            <span onClick={onPlayButtonClicked}>
              <i className={`fa fa-${collapseId ? 'stop' : 'play'}`}></i>{' '}
              {collapseId ? 'Stop' : 'Play'}
            </span>
          </MDBCol>
          {/* <MDBCol sm='6' md='12' xl='2' className='course-status'>
            <i className='text-success fa fa-check'></i> Completed
            <i className='text-danger fa fa-times'></i> Completed  
          </MDBCol> */}
        </MDBRow>
        <MDBRow>
          <MDBContainer className='mt-2'>
            <MDBRow className='w-100 justify-content-center'>
              <MDBCol md='8'>
                <MDBCollapse id='youtube-video' isOpen={collapseId}>
                  {shouldOpenYoutube && (
                    <>
                      <h6>
                        If you encounter problems rendering video, follow{' '}
                        <a
                          href={`https://youtube.com/watch?v=${contentId}`}
                          target='_blank'
                          rel='noopener noreferrer'>
                          this {''}
                        </a>
                        link
                      </h6>
                      <YoutubeVideo
                        videoId={contentId}
                        shouldPause={!collapseId}
                        startTime={elapsedTime}
                        setStartTime={setElapsedTime}
                      />
                    </>
                  )}
                </MDBCollapse>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBRow>
      </MDBContainer>
    </MDBCard>
  )
}

export default CourseContentCard
