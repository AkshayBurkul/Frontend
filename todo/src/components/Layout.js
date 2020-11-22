import React from 'react'
import {Link} from 'react-router-dom';


function Layout() {
  return (
        <div>
            <div>
                <nav className="sidebar">                 
                    <h2>Video Stream</h2>
                    <li><Link id="logo" to="/create">Home</Link></li>
                    <li><Link to="/create">About</Link></li>
                    <li><Link to="/create">Contact us</Link></li>
                    <li><Link to="/create">Create Stream</Link></li>
                    <li><Link to="/view">View Stream</Link></li>
                </nav>
                </div>
                
     </div>
        


        
    )
}

export default Layout
