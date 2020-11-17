import React, { Component } from 'react'
import skills from './images/skills.jpeg'
import '../App.css'


export default class Skills extends Component {
    render() {
        return (
    <div>
         <section className="skills" id="skills">
            <div className="container">
                <div className="row section-separator">
                    <div className="col-md-6">
                        <div>
                            <img src={skills} alt="skill photo" className="about-img pt-5" / >
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skills-inner">
                            <div className="professional-skill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s" 
                            style={{visibility: 'visible',animationDuration: '0.8s',animationDelay:'0.3s', 
                            animationName: 'fadeInUp'}}>
                                <h1>Technical Skills</h1>
                                <div className="each-skills">
                                    <div className="candidatos">
                                        <div className="parcial">
                                            <div className="info">
                                                <div className="nome">Reactjs</div>
                                                <div className="percentagem-num">66%</div>
                                            </div>
                                            <div className="progressBar">
                                                <div className="percentagem" style={{width: "36%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="candidatos">
                                        <div className="parcial">
                                            <div className="info">
                                                <div className="nome">Python,flask</div>
                                                <div className="percentagem-num">78%</div>
                                            </div>
                                            <div className="progressBar">
                                                <div className="percentagem" style={{width: "78%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="candidatos">
                                        <div className="parcial">
                                            <div className="info">
                                                <div className="nome">Javascript</div>
                                                <div className="percentagem-num">57%</div>
                                            </div>
                                            <div className="progressBar">
                                                <div className="percentagem" style={{width: "46%"}}></div>
                                            </div>
                                        </div>
                                    </div>                                    
                                    <div className="candidatos">
                                        <div className="parcial">
                                            <div className="info">
                                                <div className="nome">Ruby on rails</div>
                                                <div className="percentagem-num">42%</div>
                                            </div>
                                            <div className="progressBar">
                                                <div className="percentagem" style={{width: "46%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="candidatos">
                                        <div className="parcial">
                                            <div className="info">
                                                <div className="nome">HTML</div>
                                                <div className="percentagem-num">72%</div>
                                            </div>
                                            <div className="progressBar">
                                                <div className="percentagem" style={{width: "76%"}}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="candidatos">
                                        <div className="parcial">
                                            <div className="info">
                                                <div className="nome">CSS</div>
                                                <div className="percentagem-num">62%</div>
                                            </div>
                                            <div className="progressBar">
                                                <div className="percentagem" style={{width: "62%"}}></div>
                                            </div>
                                        </div>
                                    </div>
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
