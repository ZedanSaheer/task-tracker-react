import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!text){
            alert('Please Add A Task.')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="task">Add Task :</label>
                <input type="text" name="task"
                    placeholder="Enter your task" 
                    className="task-form" value={text} onChange={(e)=>{setText(e.target.value)}} autoComplete="off" />
                <label htmlFor="day and time">Day and Time : </label>
                <input type="text" name="day" placeholder="Add Day and Time" className="day-form" value={day} onChange={(e)=>{setDay(e.target.value)}} autoComplete="off"/>
                <div className="reminder-form"><label htmlFor="reminder">Set Reminder :</label>
                <input type="checkbox" 
                checked={reminder}
                name="reminder" className="reminder-check" value={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}} /></div>
                
                <input type="submit" value="Set Task" className="btn-submit"/>
            </div>
        </form>
    )
}

export default AddTask
