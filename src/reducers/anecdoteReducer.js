import { createSlice } from '@reduxjs/toolkit'
import anecdoteSevice from '../services/anecdote'

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      return [...state, action.payload]
    },
    updateVote(state, action) {
      const voted = action.payload

      const updatedAnecdotes = state.map((anecdote) =>
        anecdote.id === voted.id ? voted : anecdote
      )
      return updatedAnecdotes
    },
    setAnecdote(state, action) {
      return action.payload
    },
  },
})

export const { appendAnecdote, updateVote, setAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdote = await anecdoteSevice.getAll()
    dispatch(setAnecdote(anecdote))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteSevice.create(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const addVote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteSevice.update(anecdote)
    dispatch(updateVote(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer
