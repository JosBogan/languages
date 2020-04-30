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

import Classroom from './components/classroom/Classroom'
import HubContainer from './components/hub/HubContainer';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:data_name/:module_name/" component={Classroom}/>
        <Route path="/" component={HubContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
