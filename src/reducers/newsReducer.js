import { FETCH_NEWS, FETCH_DETAILS, SET_REFRESH, SEARCH_NEWS, COPY_NEWS } from '../actions/types'
import { List } from 'immutable'

const initialState = {
  items: List([]),  // an array of rss feed
  itemUrl: '', // selected rss news link
  isRefreshing: false,
  searchResult: List([])
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
    case SEARCH_NEWS:
      return {
        ...state,
        searchResult: action.payload
      }
    case COPY_NEWS:
      return {
        ...state,
        searchResult: action.payload
      }
    default:
      return state
  }

}