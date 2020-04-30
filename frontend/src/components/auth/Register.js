import React from 'react'

import axios from 'axios'

import Auth from '../../lib/auth'

import { headers } from '../../lib/headers'

class Register extends React.Component {

  state = {
    data: {
      username: null,
      email: null,
      password: null,
      password_confirmation: null
    }
  }

  onSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('/api/auth/register/', this.state.data, { headers })
      this.props.history.push('/login')
    } catch (err) {
      console.log(err)
    }
  }

  onChange = (event) => {
    const data = { ...this.state.data, [event.target.name]: event.target.value }
    this.setState({ data })
  }


  render() {
    return (
      <div className="auth_container">
        <form
          onSubmit={this.onSubmit}
        >
          <div>
            <label>Username</label>
            <div>
              <input 
              onChange={this.onChange}
              name="username"
              />
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <input 
              onChange={this.onChange}
              name="email"
              />
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <input 
              onChange={this.onChange}
              name="password"
              type="password"/>
            </div>
          </div>
          <div>
            <label>Password Confirmation</label>
            <div>
              <input 
              onChange={this.onChange}
              name="password_confirmation"
              type="password"/>
            </div>
          </div>
          <div>
            <button typeof="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Register