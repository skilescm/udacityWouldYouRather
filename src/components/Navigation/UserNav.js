import React from 'react'
import { Link } from 'react-router-dom'

const UserNav = () => {
  return (
    <div className="menu">
      <Link to='/dashboard' className="logo">Would You Rather?</Link>
      <Link to='/profile' className="user-questions button">Your Questions</Link>
      <Link to='/add' className="add primary button">Add a question</Link>
      <Link to='/logout' className="danger button">Logout</Link>
    </div>
  )
}

export default UserNav
