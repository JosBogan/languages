import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Auth from '../../lib/auth'

const SecureRoute = ({component, ...rest}) => {
  if (Auth.isAuthenticated()) return <Route component={component} {...rest}/>
  Auth.logout()
  return <Redirect to="/"/>
}

export default SecureRoute