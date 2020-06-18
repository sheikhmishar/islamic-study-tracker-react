import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      Navbar
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
      <Link to='/dashboard'>Dashboard</Link>
    </>
  )
}

export default Navbar
