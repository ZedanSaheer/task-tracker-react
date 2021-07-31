import React from 'react'
import { useState } from 'react'

const NoTask = ({showAdd}) => {
    const [hide, hideWarning] = useState(true)
    const hideOnClick = ()=>{
            hideWarning(false)
    }
    return (
        <div>
           {showAdd ? "" : <p className="noclass"> You have no tasks assigned 😃</p>}
           {hide && <div className="warning-wrapper">
                <div className="warning"><button className="Wbutton" onClick={hideOnClick}>Let's Start</button> Start Planning and assigning tasks for your day.
                </div>
            </div>}
        </div>
    )
}

export default NoTask
