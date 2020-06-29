import React, { useState, useEffect, useContext } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCollapse } from 'mdbreact'
import request from 'axios'

import { StudentDataContext } from '../Student/StudentDataProvider'
import { API_DATA } from '../../config'
import YoutubeVideo from './YoutubeVideo'

const timeStringFromSeconds = seconds => {
  if (seconds === 0) return '0s'

  const hours = parseInt(seconds / 3600)
  seconds %= 3600
  const minutes = parseInt(seconds / 60)
  seconds %= 60

  return (
    `${hours !== 0 ? `${hours}h ` : ''}` +
    `${minutes !== 0 ? `${minutes}m ` : ''}` +
    `${seconds !== 0 ? `${seconds}s` : ''}`
  )
}

const CourseContentCard = ({ title, data, onChange }) => {
  const { studentId } = useContext(StudentDataContext)
  const { _id, contentId, videoEndPosition, finished, startedAt } = data

  const [collapseId, setCollapseId] = useState('')
  const [shouldOpenYoutube, setShouldOpenYoutube] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(videoEndPosition)

  useEffect(() => {
    !collapseId
      ? setTimeout(() => setShouldOpenYoutube(false), 1000)
      : setTimeout(() => setShouldOpenYoutube(true), 500)
  }, [collapseId])

  useEffect(() => {
    if (elapsedTime !== videoEndPosition)
      request
        .put(`${API_DATA}/${studentId}/data`, {
          _id,
          videoEndPosition: elapsedTime,
          contentId,
          startedAt
        })
        .then(res => onChange(_id, res.data))
  }, [
    _id,
    studentId,
    contentId,
    startedAt,
    elapsedTime,
    videoEndPosition,
    onChange
  ])

  const onPlayButtonClicked = () =>
    setCollapseId(collapseId !== 'youtube-video' ? 'youtube-video' : '')

  return (
    <MDBCard wide className='my-3 py-3'>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='4'>
            <i className='fa fa-chalkboard'></i> {title}
          </MDBCol>
          {/* <MDBCol sm='6' md='3' xl='2'>
            <i className='far fa-clock'></i> Duration: TBI s
          </MDBCol> */}
          <MDBCol sm='6' md='3' xl='3'>
            <i className='fa fa-clock'></i> Watched:{' '}
            {timeStringFromSeconds(elapsedTime)}
          </MDBCol>
          <MDBCol sm='6' md='2' xl='2'>
            <span onClick={onPlayButtonClicked}>
              <i className={`fa fa-${collapseId ? 'stop' : 'play'}`}></i>{' '}
              {collapseId ? 'Stop' : 'Play'}
            </span>
          </MDBCol>
          <MDBCol sm='6' md='12' xl='2' className='course-status'>
            {finished && (
              <>
                <i className='text-success fa fa-check'></i> Completed
              </>
            )}
            {!finished && (
              <>
                <i className='text-danger fa fa-times'></i> Not Completed
              </>
            )}
          </MDBCol>
        </MDBRow>
        {shouldOpenYoutube && (
          <MDBRow>
            <MDBContainer className='mt-2'>
              <MDBRow className='w-100 justify-content-center'>
                <MDBCol md='8'>
                  <MDBCollapse id='youtube-video' isOpen={collapseId}>
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
                      lastPosition={elapsedTime}
                      setLastPosition={setElapsedTime}
                    />
                  </MDBCollapse>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBRow>
        )}
      </MDBContainer>
    </MDBCard>
  )
}

export default CourseContentCard
