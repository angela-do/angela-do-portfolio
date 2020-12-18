/* This component is to display my Rider Redesign work. */

import React, { Component } from 'react'
import './work.css'
/* This imports the mock-up photo. */
import Inf132RedesignPhoto from './redesign.jpg'
/* This allows for on scroll animations. */
import ScrollAnimation from 'react-animate-on-scroll';



export default class RiderRedesign extends Component {
	render() {
		return (
			 	<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut"><div style={tableStyle1}>
					<br/><h2>Transloc Rider App Redesign</h2>
					<img src={Inf132RedesignPhoto} alt="Redesign Mockups for Informatics 132 Class" className="redesign-photo"/>
					<table align="center">
						<tr className="role">
							<td>
								<p align="left">
									<h3>Role</h3>
									<strong>Product Redesigner</strong>
									<br/>
									Competitive Analysis, User Research, User Testing, Heuristic Evaluations, Visual Redesigns
								</p>
							</td>
							<td align="left">
								<h3>UCI Course</h3>
								<p><em>Informatics 132</em> - Project in Human-Computer Interaction Requirements & Evaluation</p>
								<h3>Spring 2020</h3>
							</td>
						</tr>
					</table>

					<div className="overview">
						<h3>Overview</h3>
						<p>
							TransLoc Rider is a free mobile application that provides users with real-time transit updates and commuter tools. With it, riders can view transit information such as bus location and stop ETA for all lines within a specific transportation network.
							<br/><br/>
							The Rider application is utilized by the University of California, Irvine’s free shuttle network. As UCI students who regularly use the school’s shuttle system, we've grown to rely on the Rider application to stay informed during our commute to and from campus. Through this close relationship to the application, we’ve acquired a better understanding of the app’s characteristics, difficulties, shortcomings, and impact. Based on this pre-existing knowledge base and the manageable size of the application, we feel as though we are adequately equipped to conduct a proper evaluation and deliver tangible and informative insights. Thus, we believed that this product was worth a redesign for our quarter-long project.
						</p>
						<p>
							<h3>Results & Key Takeaways</h3>
							Here are some quick reflections on the main challenges we encountered, the lessons we learned, and how this project has changed our outlooks as designers:
							<ul>
								<li>
									<strong>Remote Work.</strong> Due to the quarantine, all work for this assignment was conducted remotely. This required us to step out of our comfort zones and quickly improvise and implement remote testing methods. It also posed issues for collaborative work, as it disrupted our ability to organically observe each other and provide input. While we were able to overcome many of these issues by leveraging Google Apps, Figma, and Discord, this project demonstrated how much we take hands-on activities and design methodologies for granted.
								</li>
								<li>
									<strong>Public Transit Closure.</strong> The quarantine resulted in the closure of most public transit systems including our primary target, the UCI shuttle. This meant that the transit systems we were able to evaluate were often operating irregularly and with reduced functionality. This greatly hindered our analysis as it prevented us from getting a clear picture of the application's feature set.
								</li>
								<li>
									<strong>Changed Outlooks.</strong> The organization required to conduct UX work under any context is great; however, the efforts required to maintain group cohesion and direct our efforts under these conditions were even greater. However, in doing so we built a strong work ethic, delegated and balanced our workloads, and reinforced our abilities to work independently while striving towards a shared goal.
								</li>
							</ul>
						</p>
					</div>
					<a href="https://medium.com/uci-inf132-ux-project-spring-2020/redesigning-the-transloc-rider-app-a-ux-case-study-46d98b7c1749" target="_blank" rel="noreferrer">Click to read more</a>
					<br/>
				</div></ScrollAnimation>
		)
	}
}


const tableStyle1 = {
	background: '#333533',
	color: '#e8eddf'
}