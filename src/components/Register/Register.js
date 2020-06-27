import React, { useContext, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import request from 'axios'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBInput,
  MDBBtn,
  MDBAlert
} from 'mdbreact'

import { StudentDataContext } from '../Student/StudentDataProvider'
import { API_AUTH } from '../../config'

const DEFAULT = {
  username: '',
  setUsername: username => {},
  password: '',
  setPassword: password => {},
  status: { type: 'primary', message: '' },
  usernameErrorMessage: 'Please provide a valid username',
  passwordErrorMessage: 'Please provide a valid password',
  successMessage: 'Looks good!'
}

const Register = () => {
  const { isLoggedIn } = useContext(StudentDataContext)

  const [status, setStatus] = useState(DEFAULT.status)
  const [shouldRedirectToLogin, setRedirectToLogin] = useState(false)
  const [username, setUsername] = useState(DEFAULT.username)
  const [password, setPassword] = useState(DEFAULT.password)
  const [confirmPassword, setConfirmPassword] = useState(DEFAULT.password)
  const [confirmPasswordError, setConfirmPasswordError] = useState(
    DEFAULT.passwordErrorMessage
  )

  useEffect(() => setStatus(null), [])

  const register = () => {
    setStatus({ type: 'primary', message: 'Please wait' })
    request
      .post(`${API_AUTH}/register`, { username, password })
      .then(res => res.data)
      .then(() => {
        setStatus({
          type: 'success',
          message: 'Registration Successful'
        })
        setTimeout(() => setRedirectToLogin(true), 1000)
      })
      .catch(err => {
        if (err.response)
          setStatus({ type: 'danger', message: err.response.data.message })
        else setStatus({ type: 'danger', message: 'Connection problem' })
      })
  }

  const onSubmit = event => {
    event.preventDefault()
    if (!event.target.className.includes('was-validated'))
      event.target.className += ' was-validated'

    const isValidForm = event.target.checkValidity()
    if (isValidForm) register()
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

  if (shouldRedirectToLogin) return <Redirect to='/login' />
  if (isLoggedIn) return <Redirect to='/dashboard' />

  return (
    <MDBContainer className='mt-3'>
      <MDBRow className='justify-content-center'>
        <MDBCol md='8' lg='6'>
          <MDBCard wide>
            <MDBContainer>
              <MDBRow>
                <MDBCol className='mt-5 mx-5'>
                  {status ? (
                    <MDBContainer>
                      <MDBAlert color={status.type}>{status.message}</MDBAlert>
                    </MDBContainer>
                  ) : (
                    <></>
                  )}
                  <form
                    className='needs-validation'
                    noValidate
                    onSubmit={onSubmit}>
                    <p className='h5 text-center mb-4 text-dark'>Register</p>
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
