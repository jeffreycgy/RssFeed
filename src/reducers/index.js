import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import MainNavigator from '../config/routes'

const navReducer = createNavigationReducer(MainNavigator);

export default combineReducers({
  news: newsReducer,
  nav: navReducer
})