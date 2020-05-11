import React from 'react'

import axios from 'axios'

// import Auth from '../../lib/auth'

import { Link } from 'react-router-dom'

import { headers } from '../../lib/headers'

class Register extends React.Component {

  state = {
    data: {
      username: null,
      email: null,
      password: null,
      password_confirmation: null
    },
    focus: { 
      email: null, 
      password: null, 
      username: null, 
      password_confirmation: null }
  }

  onSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('/api/auth/register/', this.state.data, { headers })
      console.log(res.data)
      this.props.history.push('/login')
    } catch (err) {
      console.log(err)
    }
  }

  onChange = (event) => {
    const data = { ...this.state.data, [event.target.name]: event.target.value }
    this.setState({ data })
  }

  handleInputFocus = (event) => {
    const focus = { email: null, password: null, username: null, password_confirmation: null }
    focus[event.target.name] = true
    this.setState({ focus })
  }

  handleInputBlur = (event) => {
    const focus = { email: null, password: null, username: null, password_confirmation: null }
    this.setState({ focus })
  }


  render() {
    return (
      <div className="auth_container">
        <form
          onSubmit={this.onSubmit}
          autoComplete="off"
        >
          <h2 className="auth_header">Register</h2>
          <div className="auth_input_container">
            <label className={`auth_input_label ${this.state.focus.username || this.state.data.username ? 'auth_input_focus' : ''}`}>Username</label>
            <div>
              <input 
              onChange={this.onChange}
              name="username"
              className="auth_input"
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
              />
            </div>
          </div>
          <div className="auth_input_container">
            <label className={`auth_input_label ${this.state.focus.email || this.state.data.email ? 'auth_input_focus' : ''}`}>Email</label>
            <div>
              <input 
              onChange={this.onChange}
              name="email"
              className="auth_input"
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
              />
            </div>
          </div>
          <div className="auth_input_container">
            <label className={`auth_input_label ${this.state.focus.password || this.state.data.password ? 'auth_input_focus' : ''}`}>Password</label>
            <div>
              <input 
              onChange={this.onChange}
              name="password"
              className="auth_input"
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
              type="password"
              />
            </div>
          </div>
          <div className="auth_input_container">
            <label className={`auth_input_label ${this.state.focus.password_confirmation || this.state.data.password_confirmation ? 'auth_input_focus' : ''}`}>Password Confirmation</label>
            <div>
              <input 
              onChange={this.onChange}
              name="password_confirmation"
              className="auth_input"
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
              type="password"
              />
            </div>
          </div>
          <div className="auth_submit_container">
            <button typeof="submit" className="auth_submit_button">Submit</button>
            <Link to="/login" className="login_link">go to Login</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Register