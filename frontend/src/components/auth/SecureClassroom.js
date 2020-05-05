import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Auth from '../../lib/auth'
import axios from 'axios'

const SecureClassroom = ({component: component, ...rest}) => {
  if (Auth.isAuthenticated()) return <Route component={component} {...rest}/>
  Auth.logout()
  return <Redirect to="/"/>
}

export default SecureClassroom