import React from 'react'

class AuthContainer extends React.Component {

  state = {
    login: false,
    data: {
      username: null,
      email: null,
      password: null,
      password_confirmation: null
      }
  }


  render() {
    return (
      <div className="auth_container">
        <form>
          <div>
            <label>Username</label>
            <div><input /></div>
          </div>
          <div>
            <label>Email</label>
            <div><input /></div>
          </div>
          <div>
            <label>Password</label>
            <div><input /></div>
          </div>
          <div>
            <label>Password Confirmation</label>
            <div><input /></div>
          </div>
        </form>
      </div>
    )
  }
}

export default AuthContainer