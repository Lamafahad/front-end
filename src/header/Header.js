import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'


const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password" class="text-white">Change Password</Link>
    <Link to="/sign-out" class="text-white">Sign Out</Link>
    <Link to ="/programs" class="text-white">Programs</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up" class="text-white">Sign Up</Link>
    <Link to="/sign-in" class="text-white">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/" class="text-white">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (

<header className="main-header">
      <nav className="navbar navbar-expand-lg p-3 p-3 mb-2 bg-danger text-white ">
      { user && <span>Welcome, {user.email}</span>}
      <h2>Engaged for Change</h2>
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)




export default Header
