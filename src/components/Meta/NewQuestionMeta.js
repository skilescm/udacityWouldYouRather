import React from 'react'
import { Link } from 'react-router-dom'

const NewQuestionMeta = () => {
  return (
    <div className="meta">
      <div className="form-title">
        Create New Question
      </div>
      <Link to='/leaderboard' className="leaderboard">Leaderboard</Link>
    </div>
  )
}

export default NewQuestionMeta
