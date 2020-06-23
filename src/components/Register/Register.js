import React, { useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import request from 'axios'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBInput,
  MDBBtn
} from 'mdbreact'

import { StudentDataContext } from '../Student/StudentDataProvider'
import { API_AUTH, API_DATA } from '../../config'

const DEFAULT = {
  usernameErrorMessage: 'Please provide a valid username',
  passwordErrorMessage: 'Please provide a valid password',
  successMessage: 'Looks good!'
}

const Register = () => {
  const { isLoggedIn } = useContext(StudentDataContext)

  const [redirectToLogin, setRedirectToLogin] = useState(false)
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

    const isValidForm = event.target.checkValidity()
    if (isValidForm) {
      request
        .post(`${API_AUTH}/register`, { username, password })
        .then(res => res.data)
        .then(res => {
          console.log(res)
          if (res) {
            setRedirectToLogin(true)
            request
              .put(`${API_DATA}/${res._id}`, {
                data: [
                  { contentId: 'tz3t9J3jP_w' },
                  { contentId: 'MJUWA_OryX4' },
                  { contentId: '7FggvuXJuVE' },
                  { contentId: 'vr2vLD6oL1g' },
                  { contentId: 'j-3Rtdbc7vk' },
                  { contentId: 'qPDoyc0Lcy8' },
                  { contentId: 'sTiMMpeb0HI' },
                  { contentId: '85RoeYbyHtQ' },
                  { contentId: '1I1j5fcz2UQ' },
                  { contentId: 'V904IK0WgnU' },
                  { contentId: 'hy242WWXdAg' },
                  { contentId: 'bnADuZDtbQY' },
                  { contentId: 'w6fh15jVYmQ' },
                  { contentId: '0rKczCKz-Es' },
                  { contentId: 'Mv4_YYgxfaE' },
                  { contentId: 'IGH7nG5L5kk' },
                  { contentId: 'y0b8150Ub5A' },
                  { contentId: '9EFT81KVSs0' },
                  { contentId: 'IwsgnlzvvQY' },
                  { contentId: 'BQkwcq1OfDw' },
                  { contentId: 'NSmfpcE7bmQ' },
                  { contentId: '2uB6ungUSNo' },
                  { contentId: 'wD4XnTG-DGA' },
                  { contentId: 'Fma1DUuKc5Y' },
                  { contentId: 'Ghx_EDhONio' },
                  { contentId: 'tjsLdQXZXz4' },
                  { contentId: 'ztWL1Rn71tg' },
                  { contentId: 'egjHh7Q5MGk' },
                  { contentId: 'W6o0ugd5gBE' },
                  { contentId: 'qA0iz1D6aX0' },
                  { contentId: 'r3x5gMzVOtA' },
                  { contentId: 'JxklEkMZAaY' },
                  { contentId: 'GzT9Rk2IVqo' },
                  { contentId: 'M_JMRsL7D1M' },
                  { contentId: 'loB6LxqW7Mo' },
                  { contentId: 'DBMhToUDWWU' },
                  { contentId: 'qACRwIYdAGQ' },
                  { contentId: 'I6J-wchHm7M' },
                  { contentId: 's-4GwJLNmD8' },
                  { contentId: 'SeaoAchqKEc' },
                  { contentId: 'hwXAKAFvcU8' },
                  { contentId: 'CVU7xVt_DA4' },
                  { contentId: 'uLDFN1uvyTc' },
                  { contentId: 'Y-eNwrfz7j8' },
                  { contentId: 'K81OstbaPOU' },
                  { contentId: '7yIvoILQPxs' },
                  { contentId: 'GvVlaE90cBI' },
                  { contentId: 'DZJdMLxwg9o' },
                  { contentId: 'MLu9yNurIc8' },
                  { contentId: '83-O_HpTzeU' },
                  { contentId: '3tvR2bGmCSM' },
                  { contentId: 'Emc1wZcLyaU' },
                  { contentId: 'G8JlxBPzJ3c' },
                  { contentId: 'yCif_owDPsM' },
                  { contentId: '2vvumqWPA_4' },
                  { contentId: '6FGgzyTGQTs' },
                  { contentId: 'mGdiQW58OVM' },
                  { contentId: 'xn3EHws9FKY' },
                  { contentId: '369q9xNMlsE' },
                  { contentId: 'pTglZJimQW0' },
                  { contentId: 'ilGZJxpT5iY' },
                  { contentId: 'qRIcywseXmE' },
                  { contentId: 'LvOWJh3iAUg' },
                  { contentId: '-uB3HsQy1jM' },
                  { contentId: 'nQL_Vfo1ayo' },
                  { contentId: 'OTJlUooMyZk' },
                  { contentId: 'RXLz1L5a-mA' },
                  { contentId: 'B9J12dkAV_A' },
                  { contentId: 'o3BzfasPqzg' },
                  { contentId: 'dcAae86c6NY' },
                  { contentId: 'R0TnQXeX2gc' },
                  { contentId: 'CtpgShh8A0Y' },
                  { contentId: 'cD4KtT6IFYs' },
                  { contentId: 'eSJX_mhHKy4' },
                  { contentId: 'F6Y2aQEXkmQ' },
                  { contentId: 'dV76jrc6WgE' },
                  { contentId: 'DyPvO__0KHY' },
                  { contentId: 'Ul_-TLqP30M' },
                  { contentId: 'TLfmK7HM2fY' },
                  { contentId: 'TrXifvnXlnM' },
                  { contentId: '0qp4SQ4Kpbs' },
                  { contentId: 'dG4Kowe5CMs' },
                  { contentId: 'xT8zGda9PZw' },
                  { contentId: 'T7qR8IICWgU' },
                  { contentId: 'H9aCKc1eyt8' },
                  { contentId: 'VZrn34eOBec' },
                  { contentId: 'CYnfpjbjoeY' },
                  { contentId: '3x6PBSnh4KM' },
                  { contentId: 'AqC8BU6M4tU' },
                  { contentId: '09o-icS-8iM' },
                  { contentId: 'ZHk0miA8br0' },
                  { contentId: 'DusWD8kere8' },
                  { contentId: '4yDRK7Q6EGw' },
                  { contentId: 'xwZl-n5x0hg' },
                  { contentId: 'Sz7U-FGkR7Q' },
                  { contentId: 'Ago3SMffJ-I' },
                  { contentId: 'pb6jFLSpCEU' },
                  { contentId: 'nh5W1tcE3DU' },
                  { contentId: 'yZOca5JHSVc' },
                  { contentId: '84E_olaoi9c' },
                  { contentId: 'AQfCmEyoDvc' },
                  { contentId: '_zhRi1JuLhw' },
                  { contentId: 'U0C1jxqBbDE' },
                  { contentId: 'hQIPjflAJJI' },
                  { contentId: 'UKHTwUA4QnE' },
                  { contentId: 'iwt1DhYAEZk' },
                  { contentId: '1sfeiMxdQT0' },
                  { contentId: 'uAm9wa2UkJI' }
                ]
              })
              .then(res => res.data)
              .then(res => {
                console.log(res)
                if (res) {
                  setRedirectToLogin(true)
                }
              })
          }
        })
    }
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

  if (redirectToLogin) return <Redirect to='/login' />
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
