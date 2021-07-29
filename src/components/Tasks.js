import React from 'react'

const tasks = [
    {
 id:1,
 text:'Doctors Appointment',
 day:'Feb 5th at 2:30pm',
 reminder : true

}
, {
 id:2,
 text:'Teachers Appointment',
 day:'Feb 5th at 2:30pm',
 reminder : true

}
, {
 id:3,
 text:'Service Appointment',
 day:'Feb 5th at 2:30pm',
 reminder : false

}
]

export const Tasks = () => {
    return (
        <>
           {tasks.map((tasks)=> (<h3 key={tasks.id}>{tasks.text}</h3>))} 
        </>
    )
}

export default Tasks
