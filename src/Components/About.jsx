import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const About = ({ setNav }) => {
	return (
		<motion.div 
			className="home-about" 
			initial={{y: -100, opacity: 0}}
			animate={{y: 0, opacity: 1}}
			transition={{type: 'spring', stiffness: 200, duration: 2}} >
			<button className="back" onClick={ () => setNav('header') }>
				<FontAwesomeIcon icon={faArrowLeft} />
			</button>
			<h1>About Me.</h1>
			<img src="../../inst_img.png" alt="" width="200" />
			<hr />
			<div>
				<p>
					I am an Engineering student from India. I am a programmer and always try to learn more about different technologies and ideas in this field.
				</p>
				<p>
					 I find programming quite fascinating and the impact of these technologies have are so profound that you cannot ignore them in this modern world.
				This is what motivates me to make my strides towards the field of computing and information and to experiment with new ideas and technologies.
				</p>
				<p>
					Apart from tech. I like to spend my time in learning different arts or playing sports and often times you can find me listening to music or maybe even jamming a little on songs. 
				</p>

				<p>Peace Out! ☮</p>

			</div>
			
		</motion.div>
	)
}

export default About;