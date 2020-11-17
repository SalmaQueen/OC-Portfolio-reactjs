import React, { Component } from 'react'
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Work from './Work';


export default class Body extends Component {
	render() {
		return (
			<div>
				<Home/>
				<About/>
				<Skills/>
				<Work/>
			</div>
		)
	}
}
