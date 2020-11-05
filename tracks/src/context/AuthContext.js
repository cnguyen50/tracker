import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { AsyncStorage } from 'react-native'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signup':
      return { errorMessage: '', token: action.payload }
    default:
      return state
  }
}

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setIOtem('token', response.data.token)
    dispatch({ type: 'signup', payload: response.data.token })
  } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with Sign Up' })
  }
}

const signin = (dispatch) => {
  return ({ email, password }) => {

  }
}

const signout = (dispatch) => {
  return () => {

  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {signup, signin, signout},
  { token: null, errorMessage: '' }
)