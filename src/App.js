import React from 'react'
import Header from './components/Header'
import './App.css'
import Tasks from './components/Tasks'

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  )
}
 
export default App