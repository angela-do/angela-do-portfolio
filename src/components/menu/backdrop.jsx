import React from 'react'
import './menu.css'

const Backdrop = ({ close }) => {
	return (
		<div className="backdrop" onClick="{ close }"></div>
	);
}

export default Backdrop;