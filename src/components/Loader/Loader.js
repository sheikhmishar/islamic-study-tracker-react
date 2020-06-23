import React, { Suspense } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard } from 'mdbreact'

const Fallback = (
  <MDBContainer className='my-2'>
    <MDBRow className='justify-content-center'>
      <MDBCol md='8' lg='6'>
        <MDBCard wide>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <p className='text-center text-muted my-1'>Loading...</p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
)

export const Loader = ({ children }) => {
  return (
    <>
      {/* <Suspense fallback={<>loading...</>}>{children}</Suspense> */}
      <Suspense fallback={Fallback}>{children}</Suspense>
    </>
  )
}

export const lazyLoad = Component => <Loader>{Component}</Loader>
