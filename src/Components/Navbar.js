import React, { Component } from 'react'
// import {Link} from "react-router-dom";
// import {  Nav,NavItem,NavLink}from 'react-strap'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-display fixed">
	    		<a className="navbar-brand text-white" to="#home" style={{fontWeight:'600', fontSize:'2.5rem'}}>Portfolio<span className="sr-only">(current)</span></a>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"
                 style={{color: 'pink'}}>
	    			<span className="navbar-toggler-icon "></span>
	    		</button>
		    	<div className="collapse navbar-collapse " id="navbarNavDropdown">
		      		<ul className="navbar-nav ml-auto">
					



						<div class="menu">
	<div class="menu-item"><a href="#home" class="menu-link">Home</a></div>
	<div class="menu-item"><a href="#about" class="menu-link">About</a></div>
	<div class="menu-item"><a href="#skills" class="menu-link">Skills</a></div>
	<div class="menu-item"><a href="#work" class="menu-link">Work</a></div>
	<div class="menu-item"><a href="#contact" class="menu-link">Contact</a></div>
</div>











		      		</ul>
		    	</div>
		    </nav>
                
            </div>
        )
    }
}
