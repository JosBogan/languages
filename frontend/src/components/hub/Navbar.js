import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

import Auth from '../../lib/auth'

class Navbar extends React.Component {

  state = {
    scrolled: false
  }

  setScrollTrue = () => {
    if (window.scrollY > 10) {
      console.log('above 10')
      this.setState({ scrolled: true })
    }
  }

  setScrollFalse = () => {
    if (window.scrollY < 10) {
      console.log('below 10')
      this.setState({ scrolled: false })
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => this.state.scrolled ? this.setScrollFalse() : this.setScrollTrue())
    console.log(Auth.isAuthenticated())
  }

  handleLogout = () => {
    Auth.logout()
    this.props.history.push('/')
  }

  render() {
    return (
      <nav 
        className={`hub_nav ${this.state.scrolled && 'nav_box_shadow'}`}
      >
        <Link to="/" className="navbar_item"><div>Logo</div></Link>
        <div className="navbar_auth_link_container">
          {!Auth.isAuthenticated() && <Link to="/login" className="navbar_item navbar_auth_link">Login</Link>}
          {!Auth.isAuthenticated() && <Link to="/register" className="navbar_item navbar_auth_link">Register</Link>}
          {Auth.isAuthenticated() && <button className="navbar_button navbar_item navbar_auth_link"><FontAwesomeIcon icon={faSearch}/></button>}
          {Auth.isAuthenticated() && <button className="navbar_button navbar_item navbar_auth_link">Notifications</button>}
          {Auth.isAuthenticated() && <Link to="/dashboard" className="navbar_item navbar_auth_link"><FontAwesomeIcon icon={faUser}/></Link>}
          {Auth.isAuthenticated() && <button className="navbar_button navbar_item navbar_auth_link" onClick={this.handleLogout}>Logout</button>}
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)