import React from 'react';


import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Landing from './Landing'
import SubjectModules from './subjects/SubjectModules'
import SubjectIndex from './subjects/SubjectsIndex'
import Navbar from './Navbar'
import Login from '../auth/Login'
import Register from '../auth/Register'
import UserPage from './UserPage'
import SecureRoute from '../auth/SecureRoute'
import UnSecureRoute from '../auth/UnSecureRoute'

import Auth from '../../lib/auth'

class HubContainer extends React.Component {

  state = {
    user: null
  }

  componentDidMount() {
    this.getUser()
  }


  getUser = async () => {
    if (!Auth.isAuthenticated()) return
    try {
      const res = await axios.get(`/api/auth/user/`, {
        headers: {
          Authorization: `Bearer ${Auth.getToken()}`
        }
      })
      console.log(res.data)
      this.setState({ user: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Navbar />
        <div className="main_offset">
        <Switch>
            <SecureRoute path="/dashboard" component={UserPage}/>
            <UnSecureRoute path="/login" component={Login}/>
            <UnSecureRoute path="/register" component={Register}/> 
            <Route path="/subjects" component={SubjectIndex}/>
            {!this.state.user ?
            <Route path="/:data_name/" component={SubjectModules}/> :
            <Route             
              path="/:data_name/" 
              render={(props) => <SubjectModules {...props} progression={this.state.user.progression}/>}/>}
            <Route path="/" component={Landing}/>
        </Switch>
        </div>
      </div>
    )
  }
}

export default HubContainer