import React, { Component } from 'react'
import './contact.css'
import ContactForm from './contactForm.jsx'

export default class Contact extends Component {
	render() {
		return (
			<div className="connect-body">
				<h1>Connect with me. 🙃</h1>

				<p>Say hello! 👋</p>

				<ContactForm/>

				<div className="icons">
					<a href={"mailto:angeltd1@uci.edu?subject=Hello!"} class="fa fa-envelope">
						<span>Email</span>
					</a>
					<a href="https://www.facebook.com/angeladothis" class="fa fa-facebook"target = "_blank" rel = "noopener noreferrer">
						<span>Facebook</span></a>
					<a href={"https://www.linkedin.com/in/angela-do/"} class="fa fa-linkedin">
						<span>LinkedIn</span></a>
					<a href={"https://www.instagram.com/angeladothis/"} class="fa fa-instagram">
						<span>Instagram</span></a>

				</div>
			</div>
		)
	}
}
