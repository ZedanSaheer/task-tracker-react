import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p className="footerText">Click here to know why people love react!</p>
            <button className="buttonFooter"><Link to="/about" className="linkFooter">Click Here</Link></button>
        </footer>
    )
}

export default Footer
