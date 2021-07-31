import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'
import NoTask from './components/NoTask'
import Footer from './components/Footer'
import About from './components/About'

export const App = () => {
  const [show, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState('')
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!show)} showAdd={show} />
        <Route path='/' exact render={(props) => (
          <>
            {show && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
              <Tasks tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder} />)
              : (<NoTask showAdd={show} />)}
          </>
        )} />
        <Route path='/About' component={About} />
      </div>
      <div><Footer /></div>
    </Router>
  )
}

export default App