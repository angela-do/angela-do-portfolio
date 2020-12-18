import React from 'react'
import './menu.css'
import { Link } from 'react-scroll'; 

const Menu = ({open}) => {
	return (
		<nav className="menu">
			<div className="my-name">
				<Link
					to="intro"
					spy={true}
					smooth={true}
					duration={500}>
					ANGELA DO
				</Link>
			</div>
			<div className="spacing"/>
			<div className="menu-icon" onClick={open}>
				<i class="material-icons">
					menu
				</i>
			</div>
			<div className="menu-items">
				<ul>
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
			</div>
		</nav>
	)
}

export default Menu;