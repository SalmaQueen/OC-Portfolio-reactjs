import React, { Component } from 'react'
import Download from './images/download.png'
import Freelance from './images/freelance.png'
import '../App.css'


export default class Work extends Component {
    render() {
        return (
        <div className="work" id="work">
        	<h1 style={{padding: "3rem"}}><b>Work History:</b></h1>
        	<div className="container">
        		<div className="row section-separator">
        			<div className="col-md-6" id="shecode">
        				<img src={Download} alt="she code Africa"/>
						<p>1.Lead volunteer at She code Africa: Nairobi Kenya, Mentored many girls into technology Hosted Tech events on saturdays
						Taught some classNamees online using technologies reactjs.Mentored both genders on how to overcome imposter syndromes.Lead teams in coming up with SDG goals like zero hunger solution in Africa.</p>
					</div>
					<div className="col-md-6" id="freelance">
						<img src={Freelance} style={{padding: '1.5rem'}}/>
						<p>2.Graphical and Website Designer.Freelance-Nairobi Kenya, Collaborated with teams across the world.Worked and interacted with different clients around the world which gave me the exposure to understand all levels of people regardless of their age, religion or career.</p>	
					</div>
				</div>
			</div>
      	</div>
        )
    }
}
