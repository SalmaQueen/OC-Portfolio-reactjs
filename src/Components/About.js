import React, { Component } from 'react'
import Salma from './images/salma.jpeg'
import '../App.css'


export default class About extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="about" id="about">
                    <div className="container">
                        <div className="row section-separator">
                            <div className="col-md-6">
                                <img src={Salma} alt="" className="w-80" style={{height:"380px"}} />
                            </div>
                            <div className="col-md-6" style={{margin: "auto"}}>
                                <div className="about-inner ">
                                    <h1>About Me</h1>    
                                    <div className="typewriter">
                                        <h2>Hi there,Am Salma.</h2>          
                                        <p id="line-1">An independent software developer,</p>
                                        <p id="line-2">Send me a message to hire me.</p>
                                        <a href="#" target="_blank">
                                        <i className="fa fa-envelope-o fa-3x" aria-hidden="true" ></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}
