import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import { StudentDataProvider } from './components/Student/StudentDataProvider'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Dashboard from './components/Dashboard/Dashboard'

import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <StudentDataProvider>
        <div className='componentsContainer mt-5 pt-5'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </StudentDataProvider>
      <Footer />
    </>
  )
}

export default App
