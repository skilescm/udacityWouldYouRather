import React from 'react'
import { Link } from 'react-router-dom'
import HomeNav from './Navigation/HomeNav'

const Home = () => {
  return (
    <div>
      <div className="container">
        <HomeNav />
        <div className="hero">
          <div className="text">
            The test that everyone is taking<br />
            What will you choose?
          </div>
          {/*<div className="links">
            <Link to="/auth" className="login-link">Login</Link>
            <Link to="/auth" className="register-link">Register</Link>
  </div>*/}
        </div>
      </div>
      <div className="subtext">
        What would you rather? No single answer is correct.
      </div>
      <div className="question-home">
        <div className="opt option-one">
          <div className="option-text">
              To Be
          </div>
        </div>
        <div className="opt option-two">
          <div className="option-text">
              Not to Be
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
