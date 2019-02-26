import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from '@shared/store'
import '@shared/styles/global.scss'

import AppRouter from './router/AppRouter'

const store = configureStore()

ReactDOM.render(
  <AppRouter store={store} />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept()
}
