import React from 'react';


import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles/App.css';
import './styles/classroom/Sidebar.css'
import './styles/classroom/Content.css'
import './styles/classroom/ContentComponents.css'
import './styles/classroom/Misc.css'
import './styles/hub/Main.css'
import './styles/hub/subjects/Index.css'
import './styles/hub/Navbar.css'
import './styles/hub/Auth.css'
import './styles/hub/subjects/Show.css'
import './styles/hub/UserDashboard.css'
import './styles/classroom/Questions.css'

import Classroom from './components/classroom/Classroom'
import HubContainer from './components/hub/HubContainer'
import SecureRoute from './components/auth/SecureRoute'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <SecureRoute path="/cr/:subject_name/:module_name/" component={Classroom}/>
        <Route path="/" component={HubContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
