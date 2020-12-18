import React, { Component } from 'react'
import './about.css'
/* This imports my resume. */
import Resume from './AngelaDo_Resume.pdf'


export default class About extends Component {
	render() {
		return (
			<div className="aboutDiv">
				<h1>A California girl, in a UI/UX world.</h1>
				<p>
					I am currently an Informatics major specializing in Human-Computer Interaction at the University of California, Irvine (UCI). Also, I have been working as an Assistant General Manager for Jamba. My main goal is to help people by using technology and design.
				</p>
				<p>
					I strive to use the my knowledge in coding, design, and customer service to create better experience for people. I hope to work in future teams where I can express my creativity and technical skills all together.
				</p>
				<p align="right">
					<em>Preferred Pronouns: She/Her/They/Their</em>
				</p>
				<br/>
				<a href={Resume}>Click to view my resume.</a>
			</div>
		)
	}
}