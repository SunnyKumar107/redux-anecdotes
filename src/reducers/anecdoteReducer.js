import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VOTE': {
      let voted = state.find((anecdote) => anecdote.id === action.paylod)
      voted.votes = voted.votes + 1
      const newState = state.map((anecdote) =>
        anecdote.id === voted.id ? voted : anecdote
      )
      return newState
    }
    case 'ADD_ANECDOTE': {
      const newState = anecdotesAtStart.concat(action.paylod).map(asObject)

      return newState
    }
    default:
      return state
  }
}

export default reducer

//

//Redux toolkit

//

// const initialState = {
//   anecdote: [{ id: getId(), content: 'Hello World', votes: 0 }],
// }

// const anecdoteSlice = createSlice({
//   name: 'anecdote',
//   initialState,
//   reducers: {
//     createAnecdote(state, action) {
//       console.log('action', action)
//       const anecdote = {
//         id: getId(),
//         content: action.payload,
//         votes: 0,
//       }
//       state.anecdote.concat(anecdote)
//       console.log(initialState.anecdote)
//     },
//     addVote(state, action) {
//       const voteAnecdote = state.find(
//         (anecdote) => anecdote.id === action.payload
//       )
//       voteAnecdote.votes = voteAnecdote.votes + 1
//       state.map((anecdote) =>
//         anecdote.id === action.payload.id ? voteAnecdote : anecdote
//       )
//     },
//   },
// })

// export const { createAnecdote, addVote } = anecdoteSlice.actions

// export default anecdoteSlice.reducer
