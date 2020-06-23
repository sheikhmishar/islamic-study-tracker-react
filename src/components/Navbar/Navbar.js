import React, { useState, useContext } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink
} from 'mdbreact'

import { useLocation } from 'react-router-dom'
import { StudentDataContext } from '../Student/StudentDataProvider'

const Navbar = () => {
  const { isLoggedIn } = useContext(StudentDataContext)
  const [collapse, setCollapse] = useState(false)
  let location = useLocation().pathname

  const onClick = () => setCollapse(!collapse)

  const navItems = isLoggedIn ? (
    <>
      <MDBNavItem active={location === '/dashboard'}>
        <MDBNavLink
          to='/dashboard'
          className={location === '/dashboard' ? '' : 'text-default'}>
          Dashboard
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem active={location === '/logout'}>
        <MDBNavLink
          to='/logout'
          className={location === '/logout' ? '' : 'text-default'}>
          Logout
        </MDBNavLink>
      </MDBNavItem>
    </>
  ) : (
    <>
      <MDBNavItem active={location === '/login' || location === '/'}>
        <MDBNavLink
          to='/login'
          className={location === '/login' ? '' : 'text-default'}>
          Login
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem active={location === '/register'}>
        <MDBNavLink
          to='/register'
          className={location === '/register' ? '' : 'text-default'}>
          Register
        </MDBNavLink>
      </MDBNavItem>
    </>
  )

  return (
    <header>
      <MDBNavbar light color='white' expand='md' scrolling fixed='top'>
        <MDBContainer>
          <MDBNavbarBrand href='/'>
            <span className='text-default'>
              {' '}
              <i className='fa fa-quran'></i>{' '}
              <strong>Islamic Study Tracker</strong>
            </span>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={onClick} />
          <MDBCollapse isOpen={collapse} navbar>
            <MDBNavbarNav right>{navItems}</MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  )
}

export default Navbar
