import React from 'react'

import axios from 'axios'

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
    return (
      <section className="user_dashboard_container">
        {/* <div className="user_dashboard_row_container">
          <div className="user_dashboard_card"></div>
          <div className="user_dashboard_card user_dashboard_profile_info">
            <div className="user_dashboard_card_profile_image"></div>
            <div className="user_dashboard_card_profile_content">
              <h3 className="user_dashboard_card_profile_username">{user.username}</h3>
              <h4 className="user_dashboard_card_profile_email">{user.email}</h4>
              <p className="user_dashboard_card_profile_date">Joined: {user.date_joined.slice(0, 10).replace(/-/g, '/')}</p>
            </div>
          </div>
          <div className="user_dashboard_card"></div>
        </div>
        <div className="user_dashboard_row_container">

        </div>
        <div className="user_dashboard_row_container">

        </div> */}
        <div className="user_dashboard_card"></div>
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
          <p>Modules in Progress: {user.progression.module_progress.length}</p>
          <p>Modules Completed: {user.progression.module_progress.filter(module => module.completed === true).length}</p>
        </div>
        {/* <div className="user_dashboard_card grid_item_extra_wide"></div> */}
        <div className="user_dashboard_card grid_item_wide"></div>
        <div className="user_dashboard_card"></div>
        <div className="user_dashboard_card"></div>
      </section>
    )
  }
}

export default UserPage