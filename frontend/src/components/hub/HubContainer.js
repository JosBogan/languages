import React from 'react';


import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './Landing'
import SubjectModules from './subjects/SubjectModules'
import SubjectIndex from './subjects/SubjectsIndex'
import Navbar from './Navbar'
import Login from '../auth/Login'
import Register from '../auth/Register'
import UserPage from './UserPage'

function HubContainer() {
  return (
    <div>
      <Navbar />
      <div className="main_offset">
      <Switch>
          <Route path="/dashboard" component={UserPage}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/> 
          <Route path="/subjects" component={SubjectIndex}/>
          <Route path="/:data_name/" component={SubjectModules}/>
          <Route path="/" component={Landing}/>
      </Switch>
      </div>
    </div>
  )
}

export default HubContainer