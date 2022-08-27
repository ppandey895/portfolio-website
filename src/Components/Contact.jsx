import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ setNav }) => {
	return (
		<motion.div 
			className="home-contact" 
			initial={{y: -100, opacity: 0}}
			animate={{y: 0, opacity: 1}}
			transition={{type: 'spring', stiffness: 200, duration: 2}} >
			<button className="back" onClick={ () => setNav('header') }>
				<FontAwesomeIcon icon={faArrowLeft} />
			</button>
			<h1>Contact.</h1>
			<a href="">
				<img src="../../linkedin_img.png" alt="" width="50"/>
			</a>
			<a href="">
				<img src="../../google_img.png" alt="" width="50"/>
			</a>
			<a href="">
				<img src="../../inst_img.png" alt="" width="50"/>
			</a>
		</motion.div>
	)
}

export default Contact;