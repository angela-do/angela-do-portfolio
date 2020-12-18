import React, { Component } from 'react'
import './contact.css'

export default class ContactForm extends Component {
		constructor(props) {
	    	super(props);

			this.state = {
			    subject:"",
			    content: "",
	    };
  	}

	handleInputChange(event) {
	    event.preventDefault();
	    const target = event.target;
	    const name = target.name;
	    const value = target.value;

		this.setState({ [name]: value });
	}

	render() {
		return (
			<div>
			  <form className="contact-form" action="mailto:angeltd1@uci.edu" method="post" enctype="text/plain">

			  	<textarea id="name" name="name" onChange={this.handleInputChange.bind(this)} placeholder="your name" required value={this.state.name}
			  	style={{ width: "60%" }} rows={1}/>
			  	<br/>
			  	<textarea id="email" name="email" onChange={this.handleInputChange.bind(this)} placeholder="email" required value={this.state.email} style={{width:"60%"}} rows={1}/>
			  	<br/>
			  	<textarea id="subject" name="subject" onChange={this.handleInputChange.bind(this)} placeholder="subject" required value={this.state.subject} style={{width:"60%"}} rows={1}/>
			  	<br/>
			  	<textarea id="content" name="content" onChange={this.handleInputChange.bind(this)} placeholder="Hi, Angela! I stumbled across your page and ..." required value={this.state.content} style={{width:"60%"}} rows={10}/>
			  	<br/>
			  	<input type="submit" value="Send it off!"/>
			  </form>
			  	<br/>
			</div>

		)
	}
}