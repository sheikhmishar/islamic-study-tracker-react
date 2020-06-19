import React, { useState, useEffect } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from 'mdbreact'

import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const [collapse, setCollapse] = useState(false)

  const onClick = () => setCollapse(!collapse)

  let location = useLocation().pathname

  return (
    <>
      <header>
        <MDBNavbar light color='white' expand='md' scrolling fixed='top'>
          <MDBContainer>
            <MDBNavbarBrand href='/'>
              <strong className='text-default'>Islamic Study Tracker</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={onClick} />
            <MDBCollapse isOpen={collapse} navbar>
              <MDBNavbarNav right>
                {/* <MDBNavItem active={location === '/'}>
                  <MDBNavLink to='/'>Home</MDBNavLink>
                </MDBNavItem> */}
                <MDBNavItem active={location === '/login'}>
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
                <MDBNavItem active={location === '/dashboard'}>
                  <MDBNavLink
                    to='/dashboard'
                    className={location === '/dashboard' ? '' : 'text-default'}>
                    Dashboard
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </header>
    </>
  )
}

export default Navbar
