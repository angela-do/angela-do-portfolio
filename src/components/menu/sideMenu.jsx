import React from 'react'
import './menu.css'
import { Link } from 'react-scroll'; 

const SideMenu = ({ close, sideMenuOpen }) => {
	let Classes = "side-menu"
	if (sideMenuOpen) {
		Classes = "side-menu open"
	}
	return (
		<nav className={ Classes }>
			<ul>
				<li onClick={ close }>
					<span class="material-icons">
						clear
					</span>
				</li>
				<li>
					<Link
					to="intro"
					spy={true}
					smooth={true}
					duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link
					to="about"
					spy={true}
					smooth={true}
					duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link
					to="work"
					spy={true}
					smooth={true}
					duration={500}>
						Work
					</Link>
				</li>
				<li>
					<Link
					to="contact"
					spy={true}
					smooth={true}
					duration={500}>
						Connect
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default SideMenu;