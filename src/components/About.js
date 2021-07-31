import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="aboutContainer">
            <h4>Did not get it yet? try again maybe? </h4>
            <small>hint : no reloading!</small>
            <button className="buttonAbout"><Link to="/" className="linkFooter">Go back</Link></button>
        </div>
    )
}

export default About
