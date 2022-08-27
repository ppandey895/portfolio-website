import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Interest = ({ name, data }) => {
	const keys = Object.keys(data);
	const [viewAll, toggle] = useState(false);
	return (

		<>
			<div className="interest">
				<h3>{ name }</h3>
				<span style={{ fontSize: "2rem"}}>
					<FontAwesomeIcon icon={faAngleDown} onClick={ () => toggle(!viewAll) }></FontAwesomeIcon>
				</span>

			</div>
			{
				viewAll && 
				<div className="full-info">
					<motion.div 
						className="skills" 
						initial={{height: 0}}
						animate={{height: "fit-content"}}
						transition={{type: 'spring', stiffness: 100, duration: 2}} >
					{
						keys.map( (key) => 
							<ProgressBar perct={data[key]} name={key} />
						)
					}
					</motion.div>
				</div>
			}
			
		</>
	)
}

export default Interest;