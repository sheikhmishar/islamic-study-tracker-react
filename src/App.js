import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import { StudentDataProvider } from './components/Student/StudentDataProvider'
import { lazyLoad } from './components/Loader/Loader'
import './App.css'

const Navbar = lazy(() => import('./components/Navbar/Navbar'))
const Footer = lazy(() => import('./components/Footer/Footer'))
const Login = lazy(() => import('./components/Login/Login'))
const Logout = lazy(() => import('./components/Logout'))
const Register = lazy(() => import('./components/Register/Register'))
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'))

const App = () => {
  return (
    <>
      <StudentDataProvider>
        {lazyLoad(<Navbar />)}
        <div className='componentsContainer mt-5 pt-5'>
          <Switch>
            <Route exact path='/' render={props => lazyLoad(<Login />)} />
            <Route exact path='/login' render={props => lazyLoad(<Login />)} />
            <Route
              exact
              path='/logout'
              render={props => lazyLoad(<Logout />)}
            />
            <Route
              exact
              path='/register'
              render={props => lazyLoad(<Register />)}
            />
            <Route
              exact
              path='/dashboard'
              render={props => lazyLoad(<Dashboard />)}
            />
          </Switch>
        </div>
      </StudentDataProvider>
      {lazyLoad(<Footer />)}
    </>
  )
}

export default App
