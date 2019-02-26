import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import Main from '@sections/Main'
import Detail from '@sections/Detail'

const Router = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/pokemon' component={Main} />
        <Route exact path='/pokemon/:pokemon' component={Detail} />
        <Redirect to='/pokemon' />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default Router
