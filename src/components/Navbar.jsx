import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {
    return (
        <div className="navbar-m">
            <ul>
                <li>
                    <Link to = "/">
                    <i className="fas fa-home"></i>
                    <h1>Home <i className="fas fa-home"></i></h1>
                    </Link>
                   
                </li>
                <li>
                    <Link to = "/about">
                    <i className="fas fa-user"></i>
                    <h1>about  <i className="fas fa-user"></i></h1>
                    </Link>
                </li>
                <li>
                    <i className="fas fa-briefcase"></i>
                    <h1>portfolio <i className="fas fa-briefcase"></i></h1>
                    </li>
                <li>
                    <Link to = "/contact">
                    <i className="fas fa-envelope-open"></i>
                    <h1>contact  <i className="fas fa-envelope-open"></i></h1> 
                    </Link>
                    </li>
                    
                <li>
                    <i className="fab fa-microblog"></i>                    
                    <h1>blog <i className="fab fa-microblog"></i>   </h1>
                </li>
            </ul>
        </div>
    )
}
