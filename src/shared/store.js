
import { createStore, compose, applyMiddleware } from 'redux'
import { pokemon } from './reducers'
import { apiMiddleware } from './middlewares'

export default function configureStore () {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(pokemon, composeEnhancers(applyMiddleware(apiMiddleware)))
}
