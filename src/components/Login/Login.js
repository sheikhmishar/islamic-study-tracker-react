import React, { useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import request from 'axios'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBContainer,
  MDBInput,
  MDBBtn
} from 'mdbreact'

import { API_AUTH } from '../../config'
import { StudentDataContext } from '../Student/StudentDataProvider'

const Login = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    setStudentData,
    setStudentId,
    setStudentName
  } = useContext(StudentDataContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // event.target.reportValidity()
  const onSubmit = event => {
    event.preventDefault()
    if (!event.target.className.includes('was-validated'))
      event.target.className += ' was-validated'
    const isValidForm = event.target.checkValidity()
    if (isValidForm) {
      request
        .post(`${API_AUTH}/login`, { username, password })
        .then(res => res.data)
        .then(res => {
          if (res.length > 0) {
            localStorage.setItem('studentLoggedIn', 'true')
            localStorage.setItem('loggedInStudentId', res[0]._id)
            setStudentId(res[0]._id)
            setStudentName(res[0].username)
            setStudentData(res[0].data)
            setIsLoggedIn(true)
          }
        })
    }
  }

  const onInputChange = event => {
    const { name, value } = event.target
    if (name === 'username') setUsername(value)
    else if (name === 'password') setPassword(value)
  }

  if (isLoggedIn) return <Redirect to='/dashboard' />

  return (
    <MDBContainer className='mt-3'>
      <MDBRow className='justify-content-center'>
        <MDBCol md='8' lg='6'>
          <MDBCard wide>
            <MDBContainer>
              <MDBRow>
                <MDBCol className='mt-5 mx-5'>
                  <form
                    noValidate
                    onSubmit={onSubmit}
                    className='needs-validation'>
                    <p className='h5 text-center mb-4 text-muted'>Sign in</p>
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
                          Please provide a valid username
                        </div>
                        <div className='valid-feedback ml-4'>Looks good!</div>
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
                          Please provide a valid password
                        </div>
                        <div className='valid-feedback ml-4'>Looks good!</div>
                      </MDBInput>
                    </div>
                    <div className='text-center'>
                      <MDBBtn type='submit'>Login</MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <MDBRow>
              <MDBCol>
                <p className='text-center mt-3 mb-5 text-muted'>
                  Don't have an account?{' '}
                  <Link to='/register' className='text-default'>
                    Register
                  </Link>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Login
