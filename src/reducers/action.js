export const addVote = (id) => {
  return {
    type: 'ADD_VOTE',
    paylod: id,
  }
}

export const createAnecdote = (anecdote) => {
  return {
    type: 'ADD_ANECDOTE',
    paylod: anecdote,
  }
}

export const filterAnecdote = (filter) => {
  return {
    type: 'SET_FILTER',
    paylod: filter,
  }
}

export const notification = (message) => {
  return {
    type: 'SET_MESSAGE',
    paylod: message,
  }
}
