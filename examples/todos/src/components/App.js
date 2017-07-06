import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import CounterSee from '../containers/CounterSee'
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <CounterSee />
  </div>
)

export default App
