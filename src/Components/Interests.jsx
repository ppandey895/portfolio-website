import React, { useRef } from 'react';
import Interest from './Interest';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Interests = ({ setNav }) => {
	var data1 = {"HTML": 90, "CSS3": 80, "Javascript": 75, "ReactJS": 50};
	var data2 = {"Calculus": 60, "Python": 80, "NumPy": 75};
	var data3 = {"Logic": 80, "Mathematics": 60, "Physics": 75};
	var data4 = {"C++": 65, "Data Structures": 70, "Algorithms": 50, "Logic": 60};
	return (
		<motion.div 
			className="home-interests" 
			initial={{y: -100, opacity: 0}}
			animate={{y: 0, opacity: 1}}
			transition={{type: 'spring', stiffness: 200, duration: 2}} >

			<button className="back" onClick={ () => setNav('header') }>
				<FontAwesomeIcon icon={faArrowLeft} />
			</button>
			<h1>My Interests.</h1>
			<ol>
				<li>
					<Interest name="Web Development" data={ data1 } />
				</li>
				<li>
					<Interest name="Neural Networks" data={ data2 }/>
				</li>
				<li>
					<Interest name="Mathematical Simulations" data={ data3 } />
				</li>
				<li>
					<Interest name="Data Structures & Algorithms" data={ data4 } />
				</li>
			</ol>

		</motion.div>
	)
}

export default Interests;