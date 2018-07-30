import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UserNav from './Navigation/UserNav'
import LeaderboardMeta from './Meta/LeaderboardMeta'

const Leaderboard = (props) => {
  const { auth, data } = props

  if (auth === null) {
    return <Redirect to='/auth' />
  }

  return (
    <div>
      <UserNav />
      <LeaderboardMeta />
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Avatar</th>
            <th>Questions submitted</th>
            <th>Answers Provided</th>
          </tr>
        </thead>
        <tbody>
          { data.map((user, key) => (
            <tr key={user.id}>
              <td>{key + 1}</td>
              <td>{user.name}</td>
              <td><img src={ user.avatar === '' ? './user-icon.png' : user.avatar} alt="Avatar" /></td>
              <td>{user.questions}</td>
              <td>{user.answers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function mapStateToProps ({ auth, users }) {
  let data = []

  Object.keys(users).map(userId => {
    data.push({
      id: userId,
      name: users[userId].name,
      avatar: users[userId].avatarURL,
      questions: users[userId].questions.length,
      answers: Object.keys(users[userId].answers).length
    })
  })

  data.sort(function (a, b) {
    return (b.questions + b.answers) - (a.questions + a.answers)
  })

  return {
    auth,
    data
  }
}

export default connect(mapStateToProps)(Leaderboard)
