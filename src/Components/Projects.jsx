import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Projects = ({ setNav }) => {
	return (
		<div className="home-projects">
			<button className="back" onClick={ () => setNav('header') }>
				<FontAwesomeIcon icon={faArrowLeft} />
			</button>
			<h1>My Projects.</h1>
		</div>
	)
}

export default Projects;