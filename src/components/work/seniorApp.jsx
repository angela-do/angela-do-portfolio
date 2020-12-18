/* This component is to display my Senior Project Design work. */

import React, { Component } from 'react'
import './work.css'
/* This allows for on scroll animations. */
import ScrollAnimation from 'react-animate-on-scroll';

export default class RiderRedesign extends Component {
	render() {
		return (
				<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut"><div style={tableStyle1}>
					<br/><h2><em>SealSpotter</em> App</h2>
					{/* Prototype Video */}
					<div className="video-wrapper">
						<iframe title="Senior Design Project Mobile App Prototype" src="https://player.vimeo.com/video/491950492" width="640" height="430" frameborder="0" allow="autoplay; fullscreen" allowfullscreen align="right"></iframe>
					</div>
					<table align="center">
						<tr className="role">
							<td>
								<p align="left">
									<h3>Role</h3>
									<strong>Project Manager</strong>
									<br/>
									User Research, Project Planning, Business Case, 
									<br/>
									Risk Analysis, Requirements Documentation, UI Design,
									<br/>Software Design, Prototyping
								</p>
							</td>
							<td align="left">
								<h3>UCI Course</h3>
								<p><em>Informatics 191A/B</em> - Senior Design Project</p>
								<h3>Fall 2020-Spring 2021</h3>
							</td>
						</tr>
					</table>
					<div className="overview">
						<p>
							<h3>Overview</h3>
							Pacific Marine Mammal Center (PMMC) has three goals that they want to achieve:
							<ul>
								<li>To rescue and rehabilitate injured and/or sick pinnipeds (e.g. seals, sea lions) in Orange County </li>
								<li>To progress research on marine mammal health to better gauge how to rehabilitate pinnipeds </li>
								<li>To educate the public on marine science and their part in protecting marine life</li>
							</ul>
							Part of PMMC’s routine involves tracking rehabilitated and released pinnipeds. Often, the released pinnipeds are not seen for long periods of time, and PMMC has no idea what their patients are up to after release. In addition, members of PMMC are busy with other involved tasks that come with rehabilitation that they cannot make time to spot and track the pinnipeds themselves. Another issue PMMC wants to address is the fact that injured or dead pinnipeds need immediate care. Some pinnipeds on the beach appear dead; however, there is a chance that the pinniped is severely injured and needs attention.
							<br/><br/>
							The <em>SealSpotter</em> app aims to aid in the tracking of rescued pinnipeds by getting the general public involved. Whenever a user spots a pinniped, they can report it using the app. The report will contain information about the pinniped and its location, which PMMC can then use to track their movements. This will aid PMMC with their rehabilitation efforts and research, as well as informing the public on marine conservation by getting involved first hand.
							<br/><br/>
							Also, the <em>SealSpotter</em> app strives to report pinniped emergencies. When a user sees injured or dead pinnipeds, they can report it to PMMC directly through the app to find professional care. If the pinniped is outside of the PMMC area jurisdiction, PMMC can contact the correct authorities to provide care for the animal.
						</p>
					</div>
					<h4>This project is still in the works.
					<br/>Project launch will be the end of March 2021! 🥳</h4>
				</div></ScrollAnimation>
			)
		}
}

const tableStyle1 = {
	background: '#333533',
	color: '#e8eddf',
}