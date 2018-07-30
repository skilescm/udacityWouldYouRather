export const GET_USERS = 'GET_USERS'
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export function getUsers (users) {
  return {
    type: GET_USERS,
    users
  }
}

export function saveUserAnswer (auth, qid, option) {
  return {
    type: USER_ANSWER_QUESTION,
    auth,
    qid,
    option
  }
}

export function addUserQuestion (question) {
  return {
    type: ADD_USER_QUESTION,
    question
  }
}
