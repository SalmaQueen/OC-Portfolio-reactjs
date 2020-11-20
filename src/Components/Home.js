import React, { Component } from 'react'
import '../App.css'
import Undraw from './images/undraw.png'

export default class Home extends Component {
    render() {
        return (
            <div>
            <section className="home" id="home">
                <div className="container">
                    <div className="row" >
                        <div className="col-md-6" >
                            <div className="content" style={{padding:'3rem'}}>
                                <div className="real-content">
                                    <h1>Salma Mohamed</h1>
                                    <h4>Software Developer</h4>
                                    <p>I mix art with coding.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <img src={Undraw} style={{width:"100%", height:"80%"}} alt="salma"/>
                        </div>
                </div>
                </div>
            </section> 
            
            </div>
        )
    }
}
