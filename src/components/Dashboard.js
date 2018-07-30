import React, { Component } from 'react'
import UserNav from './Navigation/UserNav'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import HelloMeta from './Meta/HelloMeta'
import Question from './Question'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answeredQ: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    if (this.state.answeredQ) {
      this.setState({ answeredQ: false })
    } else {
      this.setState({ answeredQ: true })
    }
    this.forceUpdate()
  }

  render () {
    const { answered, unanswered, auth, user } = this.props
    const { answeredQ } = this.state
    if (auth === null) {
      return <Redirect to='/auth' />
    }
    return (
      <div>
        <UserNav />
        <HelloMeta user={user} />
        <div className="questions">
          <div className="pickup-line">
            <div className="line">Select an answer to each question below. Click the green arrow to see question details.</div>
            <div className={ answeredQ ? 'answered active-link' : 'answered'} onClick={this.toggle}>Answered</div>
            <div className={ answeredQ ? 'unanswered' : 'unanswered active-link'} onClick={this.toggle}>Unanswered</div>
          </div>
          <div className="set">
            { answeredQ && answered.map(question => (
              <Question question={question} answer={user.answers[question.id]} key={question.id} />
            ))}
            { !answeredQ && unanswered.map(question => (
              <Question question={question} key={question.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users, auth }) {
  let user
  let answered = []
  let unanswered = []
  if (auth !== null) {
    user = users[auth]
  }
  Object.keys(questions).map(k => questions[k]).filter(question => {
    if (user.answers.hasOwnProperty(question.id)) {
      answered.push(question)
    } else {
      unanswered.push(question)
    }
  })
  return {
    answered,
    unanswered,
    auth,
    user
  }
}

export default connect(mapStateToProps)(Dashboard)
