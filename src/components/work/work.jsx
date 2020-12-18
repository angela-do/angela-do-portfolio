import React, { Component } from 'react'
import './work.css'

/* This imports my different projects.
	My choice for doing so was to make sure that the code is cleaner inside this component.
	I wanted to keep different things separate, otherwise it would have a lot of HTML embedded in it.
*/
import RiderRedesign from './riderRedesign.jsx'
import SeniorApp from './seniorApp.jsx'
import GameDevProject from './gameDev.jsx'

export default class Work extends Component {
	render() {
		return (
			<div className="work-body">
				<h1>Work</h1>
				<SeniorApp/>
				<GameDevProject/>
				<RiderRedesign/>
				
			</div>
		)
	}
}
