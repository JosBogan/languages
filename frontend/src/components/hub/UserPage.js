import React from 'react'

import axios from 'axios'

import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'

class UserPage extends React.Component {
  
  state = {
    userProgress: null
  }

  async componentDidMount() {
    console.log(this.props)
    try {
      const res = await axios.get('/api/auth/user/progress', {
        headers: {
          Authorization: `Bearer ${Auth.getToken()}`
        }
      })
      this.setState({ userProgress: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (!this.props.user) return null
    if (!this.state.userProgress) return null
    const user = this.props.user
    const userProgress = this.state.userProgress
    return (
      <section className="user_dashboard_container">
        <div className="user_dashboard_card">
          <h2 className="user_dashboard_card_header">Notifications</h2>
          <div className="user_dashboard_card_content">
          </div>
        </div>
        <div className="user_dashboard_card user_dashboard_card_profile">
        <div className="user_dashboard_card_profile_image">{user.username[0]}</div>
          <div className="user_dashboard_card_profile_content">
            <h3 className="user_dashboard_card_profile_username">{user.username}</h3>
            <h4 className="user_dashboard_card_profile_email">{user.email}</h4>
            <p className="user_dashboard_card_profile_date">Joined: {user.date_joined.slice(0, 10).replace(/-/g, '/')}</p>
          </div>
        </div>
        <div className="user_dashboard_card">
          <h2 className="user_dashboard_card_header">Stats</h2>
          <div className="user_dashboard_card_content">
          <p>Modules in Progress: {user.progression.module_progress.length}</p>
          <p>Modules Completed: {user.progression.module_progress.filter(module => module.completed === true).length}</p>
          </div>
        </div>
        {/* <div className="user_dashboard_card grid_item_extra_wide"></div> */}
        <div className="user_dashboard_card grid_item_wide">
          <div className="user_dashboard_all_progress_container">
          {userProgress.module_progress.map(module => (
            <Link key={module.id} to={`/cr/${module.module_id.subject.name}/${module.module_id.data_name}/`}>
            <div 
              className="user_dashboard_module_progress_container"
            >
              <div>
                <svg height="100" width="100">
                  <circle className="user_dashboard_progress_bar_outer" cx="50" cy="50" r="40"/>
                  <circle className="user_dashboard_progress_bar" cx="50" cy="50" r="40" strokeDasharray="251" strokeDashoffset={251 - ((module.progress / 100) * 251)} />
                </svg>
              </div>
              <h4>{module.module_id.name}</h4>
            </div>
            </Link>
          ))}
          </div>
        </div>
        <div className="user_dashboard_card"></div>
        <div className="user_dashboard_card"></div>
      </section>
    )
  }
}

export default UserPage