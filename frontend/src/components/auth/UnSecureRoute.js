import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Auth from '../../lib/auth'

const UnSecureRoute = ({ component: component, ...rest }) => {
  if (!Auth.isAuthenticated()) return <Route component={component} {...rest}/>
  return <Redirect to="/"/>
}

export default UnSecureRoute