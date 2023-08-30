import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className='navbar'>
            <h1>TamilNadu Tourism</h1>
            <div>
                <ul>
                    <Link to="/"><li><a>Home</a></li></Link> 
                    <Link to="/place"><li><a>Place To Visit</a></li></Link> 
                    <Link to="/time"><li><a>Best Time to Visit</a></li></Link> 
                    <li><a>Package</a></li>
                    <li><a>Destination</a></li>
                    <li><a>Food</a></li>
                    
                </ul>
            </div>

        </div>
    )
}
export default Navbar;