import React, { Component } from 'react'
import './intro.css'
import ProfilePicture from './aboutMePicSquare.png'

//var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


export default class Intro extends Component {
	render() {
		return (
		    <div>
		    	<div className="column">
	            	<img src={ProfilePicture} alt="Angela Do Profile Pic" align="right"/>
				</div>   
				<div className="row">
					<div className="column">
						<h1>Hi, I'm Angela Do.</h1>
						<h2>— Information and Computer Science Student at University of California, Irvine (UCI)</h2>
						<h2>— UI/UX Designer</h2>
					</div>
				</div>
			</div>
		)
	}
}