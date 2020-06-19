import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBInput,
  MDBBtn
} from 'mdbreact'

import { StudentDataContext } from '../Student/StudentDataProvider'

const DEFAULT = {
  usernameErrorMessage: 'Please provide a valid username',
  passwordErrorMessage: 'Please provide a valid password',
  successMessage: 'Looks good!'
}

const Register = () => {
  const { isLoggedIn } = useContext(StudentDataContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState(
    DEFAULT.passwordErrorMessage
  )

  const onSubmit = event => {
    event.preventDefault()
    if (!event.target.className.includes('was-validated'))
      event.target.className += ' was-validated'
  }

  const onInputChange = event => {
    const { name, value } = event.target
    if (name === 'username') setUsername(value)
    else if (name === 'password') setPassword(value)
    else if (name === 'confirm-password') {
      setConfirmPassword(value)
      const textEdit = event.target
      if (value === password) textEdit.setCustomValidity('')
      else {
        if (value === '') setConfirmPasswordError(DEFAULT.passwordErrorMessage)
        else setConfirmPasswordError("Passwords don't match")
        textEdit.setCustomValidity('error')
      }
    }
  }

  return (
    <MDBContainer className='mt-3'>
      <MDBRow className='justify-content-center'>
        <MDBCol md='8' lg='6'>
          <MDBCard wide>
            <MDBContainer>
              <MDBRow>
                <MDBCol className='mt-5 mx-5'>
                  <form
                    className='needs-validation'
                    noValidate
                    onSubmit={onSubmit}>
                    <p className='h5 text-center mb-4 text-muted'>Register</p>
                    <div className='grey-text'>
                      <MDBInput
                        icon='user'
                        label='Type your username'
                        name='username'
                        type='text'
                        value={username}
                        onChange={onInputChange}
                        group
                        required
                        validate>
                        <div className='invalid-feedback ml-4'>
                          {DEFAULT.usernameErrorMessage}
                        </div>
                        <div className='valid-feedback ml-4'>
                          {DEFAULT.successMessage}
                        </div>
                      </MDBInput>
                      <MDBInput
                        icon='lock'
                        name='password'
                        type='password'
                        label='Type your password'
                        value={password}
                        onChange={onInputChange}
                        group
                        required
                        validate>
                        <div className='invalid-feedback ml-4'>
                          {DEFAULT.passwordErrorMessage}
                        </div>
                        <div className='valid-feedback ml-4'>
                          {DEFAULT.successMessage}
                        </div>
                      </MDBInput>
                      <MDBInput
                        icon='exclamation-triangle'
                        name='confirm-password'
                        label='Confirm your password'
                        group
                        type='password'
                        value={confirmPassword}
                        onChange={onInputChange}
                        validate
                        required>
                        <div className='invalid-feedback ml-4'>
                          {confirmPasswordError}
                        </div>
                        <div className='valid-feedback ml-4'>
                          {DEFAULT.successMessage}
                        </div>
                      </MDBInput>
                    </div>
                    <div className='text-center'>
                      <MDBBtn type='submit'>Register</MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol>
                  <p className='text-center mt-3 mb-5 text-muted'>
                    Already Registered?{' '}
                    <Link to='/login' className='text-default'>
                      Login
                    </Link>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Register
