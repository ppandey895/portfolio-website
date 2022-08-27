import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faBullseye, 
	faBirthdayCake,
	faMailBulk, 
	faUserAstronaut } 
from '@fortawesome/free-solid-svg-icons';

const Header = ({ setNav }) => {
	const getNavItem = (e) => {
		setNav(e.target.innerText.toLowerCase());
		console.log(e.target.innerText.toLowerCase());
		e.preventDefault();
	}

	return (
		<motion.div 
			className="header"
			initial={{y: -100}}
			animate={{y: 0}}
			transition={{type: 'spring', stiffness: 200, duration: 2}} >
			<div className="nav">
				<div className="nav-item" onClick={ (e) => getNavItem(e) }>
					<a href="">
						Interests
						<FontAwesomeIcon icon={faUserAstronaut}/>
					</a>
				</div>
				<div className="nav-item" onClick={ (e) => getNavItem(e) }>
					<a href="">
						Projects
						<FontAwesomeIcon icon={faBullseye}/>
					</a>
				</div>
				<div className="nav-item" onClick={ (e) => getNavItem(e) }>
					<a href="">
						About Me
					  <FontAwesomeIcon icon={faBirthdayCake} />
					</a>
				</div>
				<div className="nav-item" onClick={ (e) => getNavItem(e) }>
					<a href="">
						Contact
						<FontAwesomeIcon icon={faMailBulk} />
					</a>
				</div>
			</div>
		</motion.div>
	)
}

export default Header;