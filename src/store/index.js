import { createStore } from 'redux'
import rootReducer from './reducers/index'


const store = createStore(
  rootReducer,
  typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)

export default store