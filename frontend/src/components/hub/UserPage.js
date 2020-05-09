import React from 'react'

class UserPage extends React.Component {

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    if (!this.props.user) return null
    console.log(this.props.user)
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
        <div className="user_dashboard_card"></div>
        <div className="user_dashboard_card grid_item_extra_wide"></div>
        <div className="user_dashboard_card grid_item_wide"></div>
        <div className="user_dashboard_card"></div>
        <div className="user_dashboard_card"></div>
      </section>
    )
  }
}

export default UserPage