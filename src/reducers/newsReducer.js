import { FETCH_NEWS, FETCH_DETAILS, SET_REFRESH } from '../actions/types'

const initialState = {
  items: [],  // an array of rss feed
  itemUrl: '', // selected rss news link
  isRefreshing: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        items: action.payload
      }
    case FETCH_DETAILS:
      return {
        ...state,
        itemUrl: action.payload
      }
    case SET_REFRESH:
      return {
        ...state,
        isRefreshing: action.payload
      }
    default:
      return state
  }

}