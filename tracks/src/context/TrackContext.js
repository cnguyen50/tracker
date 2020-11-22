import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const fetchTrack = dispatch => () => {}
const createTrack = dispatch => async (name, locations) => {
  console.log("test")
  await trackerApi.post('/tracks', { name, locations })
}

export const { Provider, Context } = createDataContext(
  trackReducer, {
    fetchTrack,
    createTrack
  },
  []
)