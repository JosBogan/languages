import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Auth from '../../lib/auth'

const SecureRoute = ({component: Component, user, ...rest}) => {
  // if (Auth.isAuthenticated()) return <Route component={component} {...rest}/>
  if (Auth.isAuthenticated()) return <Route {...rest} render={(props) => <Component {...props} user={user}/>} />
  Auth.logout()
  return <Redirect to="/"/>
}

// const SecureRoute = ({ component: Component, user, ...rest }) => {
//   if (Auth.isAuthenticated()) return (
//     <Route {...rest} render={(props) => <Component {...props} user={user} /> } />
//   )
//   Auth.logout()
//   return <Redirect to="/"/>
// }

export default SecureRoute