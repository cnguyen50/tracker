import CreateDataContext from './createDataContext'
import createDataContext from './createDataContext'

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const fetchTrack = dispatch => () => {}
const createTrack = dispatch => () => {}

export const { Provider, COntext } = createDataContext(
  trackReducer, {
    fetchTrack,
    createTrack
  }
)