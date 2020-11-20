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
				<hr class="hr3"/>
				<About/>
				<hr class="hr3"/>
				<Skills/>
				<hr class="hr3"/>
				<Work/>
			</div>
		)
	}
}
