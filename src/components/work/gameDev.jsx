/* This component is to display my Game Development work. */

import React, { Component } from 'react'
import './work.css'
/* This imports our game logo. */
import ThunderIceArts from './gameDevImages/TIALogo.png'
import Phobia from './gameDevImages/PhobiaLogo.png'
/* This allows for on-scroll animations. */
import ScrollAnimation from 'react-animate-on-scroll';



export default class GameDevProject extends Component {
	render() {
		return (
			 	<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut"><div style={tableStyle1}>
					<br/><h2><em>Phobia</em> Game Design</h2>
					<img src={Phobia} alt="Phobia Game" className="tia-photo"/><br/>
					<img src={ThunderIceArts} alt="Thunder Ice Arts Logo" className="tia-photo"/>
					<table align="center">
						<tr className="role">
							<td>
								<p align="left">
									<h3>Role</h3>
									<strong>Team Member</strong>
									<br/>
									Collaboration, Design Documentation, Testing, Marketing, Website Maker
								</p>
							</td>
							<td align="left">
								<h3>UCI Course</h3>
								<p><em>Informatics 125</em> - Computer Game Development</p>
								<h3>Fall 2020</h3>
							</td>
						</tr>
					</table>

					<div className="overview">
						<h3>Overview</h3>
						<p>
							For much of the quarter, the class went through the importance of studying the aspects of game design as well as the walk-through of the history of games. At the beginning of the quarter, we were expected to bring together a small indie game studio of six people. I found myself apart of <em>Thunder Ice Arts</em>, an indie game studio made up of other UCI students. We had to meet remotely and come up with our own analog card game. It was then that we decided to create <em>Phobia</em>, a party card game based on dares.
						</p>
						<p>
							<h3>Results & Key Takeaways</h3>
							Here are some quick reflections on the main challenges we encountered, the lessons we learned, and how this project has changed our outlooks as designers:
							<ul>
								<li>
									<strong>Remote Work.</strong> Due to the quarantine, all work for this assignment was conducted remotely. We had to keep each other accountable and met at least once a week online through Discord. Collaboration was difficult especially during game testing, which we had to improvise through role play.
								</li>
								<li>
									<strong>Fun Atmosphere.</strong> Because we could never meet each other, we tried to make our meetings as fun as possible. Luckily, our teammates all had great personalities. Thus, creating a fun, safe space made our project go more smoothly.
								</li>
								<li>
									<strong>Continued Communication.</strong> At the end of the quarter, we exchanged contact information to keep in touch for the near future. We hope that we can help each other strive to other goals outside of this class.
								</li>
							</ul>
						</p>
					</div>
					<a href="https://phobiagame13.wixsite.com/phobia-game" target="_blank" rel="noreferrer">Click to see our website</a>
					<br/>
				</div><br/></ScrollAnimation>
		)
	}
}


const tableStyle1 = {
	background: '#97b1a4',
	color: '#333533'
}