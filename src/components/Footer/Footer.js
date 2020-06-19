import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdbreact'

const Footer = () => {
  return (
    <MDBFooter color='default-color' className='font-small pt-4 mt-4'>
      <MDBContainer className='text-center'>
        <MDBRow className='justify-content-center'>
          <MDBCol>
            <h5 className='title'>Remember!</h5>
            <p>
              The satan is extremely eager to destroy every single effort that
              you put into learning the book of Allaah, especially your focus
              and consistency. Always pray to Allaah and try your best to stay
              focused
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3 default-color-dark'>
        <MDBContainer>
          &copy; {new Date().getFullYear()} Copyright: sheikhMishar00
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
