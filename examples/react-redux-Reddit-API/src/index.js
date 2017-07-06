import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import todoApp from './reducers/reducers'
import Root from './containers/Root'

let store = createStore(todoApp)

render(
  <Root store={store} />,
  document.getElementById('root')
)
