import React from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

import Auth from '../../lib/auth'


import { headers } from '../../lib/headers'

class Login extends React.Component {

  state = {
    data: {
      username: null,
      email: null,
      password: null,
      password_confirmation: null
    },
    focus: {
      email: null,
      password: null
    }
  }

  onSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('/api/auth/login/', this.state.data, { headers })
      Auth.setToken(res.data.token)
      // this.props.getUser()
      this.props.history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  // componentDidMount() {
  //   console.log(this.props)
  // }


  onChange = (event) => {
    const data = { ...this.state.data, [event.target.name]: event.target.value }
    this.setState({ data })
  }

  handleInputFocus = (event) => {
    const focus = { email: null, password: null }
    focus[event.target.name] = true
    this.setState({ focus })
  }

  handleInputBlur = (event) => {
    const focus = { email: null, password: null }
    this.setState({ focus })
  }



  render() {
    return (
      <div className="auth_container">
        <form
          onSubmit={this.onSubmit}
          autoComplete="off"
        >
          <h2 className="auth_header">Login</h2>
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
          <div className="auth_submit_container">
            <button typeof="submit" className="auth_submit_button">Enter!</button>
            <Link to="/register" className="login_link">go to Register</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Login