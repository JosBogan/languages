import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

  render() {
    return (
      <nav className="hub_nav">
        <Link to="/" className="navbar_item"><div>Logo</div></Link>
        <div className="navbar_auth_link_container">
          <Link to="/login" className="navbar_item navbar_auth_link">Login</Link>
          <Link to="/register" className="navbar_item navbar_auth_link">Register</Link>
        </div>
      </nav>
    )
  }
}

export default Navbar