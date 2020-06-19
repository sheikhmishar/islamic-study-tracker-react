import React from 'react'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBInput,
  MDBBtn
} from 'mdbreact'

const Dashboard = () => {
  const username = 'adnan'
  const rows = [
    { videoId: 'as', watched: '12' },
    { videoId: 'as', watched: '12' },
    { videoId: 'as', watched: '12' }
  ]

  return (
    <MDBContainer>
      <MDBRow className='justify-content-center'>
        <p className='h5 text-center mb-4'>Assalaamu'alaikum, {username}</p>
      </MDBRow>
      <MDBRow className='justify-content-center'>
        <MDBCol>
          {rows.map(row => (
            <MDBCard wide className='my-3'>
              <MDBContainer>
                <MDBRow>
                  <MDBCol>hi</MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCard>
          ))}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Dashboard
