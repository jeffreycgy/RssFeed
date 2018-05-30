import { FETCH_NEWS } from '../actions/types'

const initialState = {
  items: [],  // an array of rss feed
  itemUrl: '' // selected rss news link
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_NEWS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }

}