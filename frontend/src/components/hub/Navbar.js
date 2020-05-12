import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch, faBell, faBook, faChalkboard } from '@fortawesome/free-solid-svg-icons'

import Auth from '../../lib/auth'

class Navbar extends React.Component {

  state = {
    scrolled: false,
    selected: null
  }

  setScrollTrue = () => {
    if (window.scrollY > 10) {
      this.setState({ scrolled: true })
    }
  }

  setScrollFalse = () => {
    if (window.scrollY < 10) {

      this.setState({ scrolled: false })
    }
  }

  componentDidUpdate(prevProps) {
    this.setLocation(prevProps)
  }

  setLocation = (prevProps) => {
    if (!prevProps || (this.props.location.pathname !== prevProps.location.pathname)) {
      this.setState({ selected: this.props.location.pathname })
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => this.state.scrolled ? this.setScrollFalse() : this.setScrollTrue())
    this.setLocation()
  }

  handleLogout = () => {
    Auth.logout()
    this.props.removeUser()
    this.props.history.push('/')
  }

  render() {
    return (
      <nav 
        className={`hub_nav ${this.state.scrolled && 'nav_box_shadow'}`}
      >
        <Link to="/" className="navbar_item"><div>Logo</div></Link>
        <div className="navbar_auth_link_container">
          {Auth.isAuthenticated() && 
            <button aria-label="Search" 
            className={`navbar_button navbar_item navbar_auth_link`}><FontAwesomeIcon icon={faSearch}/></button>}
          {Auth.isAuthenticated() && 
            <button aria-label="Notifications" 
            className={`navbar_button navbar_item navbar_auth_link`}><FontAwesomeIcon icon={faBell}/></button>}
          {Auth.isAuthenticated() && 
            <Link title="User Dashboard" to="/dashboard" 
            className={`navbar_item navbar_auth_link ${this.state.selected === '/dashboard' && 'nav_auth_link_selected'}`}><FontAwesomeIcon icon={faUser}/></Link>}
            <Link title="Subjects" to="/subjects" 
            className={`navbar_item navbar_auth_link ${this.state.selected === '/subjects' && 'nav_auth_link_selected'}`}><FontAwesomeIcon icon={faBook}/></Link>
          {Auth.isAuthenticated() && 
            <Link title="Classroom" to="/cr/" 
            className={`navbar_item navbar_auth_link ${this.state.selected === '/cr/' && 'nav_auth_link_selected'}`}><FontAwesomeIcon icon={faChalkboard}/></Link>}
          {Auth.isAuthenticated() && 
          <button aria-label="Logout" 
          className={`navbar_button navbar_item navbar_auth_link ${this.state.selected === '' && 'nav_auth_link_selected'}`} onClick={this.handleLogout}>Logout</button>}
          {!Auth.isAuthenticated() && 
            <Link to="/login" 
              className={`navbar_item navbar_auth_link ${this.state.selected === '/login' && 'nav_auth_link_selected'}`}>Login</Link>}
          {!Auth.isAuthenticated() && 
            <Link to="/register" 
            className={`navbar_item navbar_auth_link ${this.state.selected === '/register' && 'nav_auth_link_selected'}`}>Register</Link>}
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)