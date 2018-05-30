import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const initialState = {}

const middleware = [
  thunk,
  createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
  )
]

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
)

export default store