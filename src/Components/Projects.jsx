import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowLeft, faLink } from '@fortawesome/free-solid-svg-icons';

const Projects = ({ setNav }) => {
	return (
		<motion.div className="home-projects"
			initial={{y: -100, opacity: 0}}
			animate={{y: 0, opacity: 1}}
			transition={{type: 'spring', stiffness: 120, duration: 0.5}}>
			<button className="back" onClick={ () => setNav('header') }>
				<FontAwesomeIcon icon={faArrowLeft} />
			</button>

			<h1>My Projects.</h1>

			<div className="projects">
				<div className="web-projects">
					<h3>
						Web Projects
					</h3>
					<ol>
						<li>
							<a href="https://rock-paper-scissors-rps.netlify.app" target="blank">
								<h4><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> Rock Paper Scissors</h4>
							</a>
							<p>Tech Stack - CSS3, JavaScript ES6, jQuery</p>
						</li>
						<li>
							<a href="https://nasa-api-website.netlify.app" target="blank">
								<h4><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> Website Using NASA API</h4>
							</a>
							<p>Tech Stack - CSS3, JavaScript ES6, NASA API</p>
						</li>
						<li>
							<a href="https://ppandey895.github.io/HeroPedia" target="blank">
								<h4><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> HeroPedia</h4>
							</a>
							<p>Tech Stack - ReactJS, CSS3, Framer Motion, SuperHeroAPI</p>
						</li>
					</ol>
				</div>

				<div className="python-projects">
					<h3>
						Python Projects
					</h3>

					<ol>
						<li>
							<a href="">
								<h4><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> Flappy Bird Game</h4>
							</a>
							<p>Tech Stack - Made using pygame module</p>
						</li>
						<li>
							<a href="">
								<h4><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> Functional Notepad</h4>
							</a>
							<p>Tech Stack - Made using python file dialog module</p>
						</li>
						<li>
							<a href="">
								<h4><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> Space Invader Game</h4>
								<p>Tech Stack - Made using pygame module</p>
							</a>
						</li>
					</ol>
				</div>
				<div className="nn-projects">
					<h3>
						Neural Network Projects
					</h3>
					<ol>
						<li>
							<a href="https://github.com/ppandey895/Neural-Networks/tree/main/Perceptron">
								<h4><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> Perceptron</h4>
							</a>
							<p>
								Description - A perceptron is a single layered and most simple neural network which is able to solve
								linearly separable problems. 
								This perceptron predicts if a random point is above or below the given
								line.
							</p>
						</li>
						<li>
							<a href="https://github.com/ppandey895/Neural-Networks/tree/main/NN_XOR">
								<h4><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> EX-OR Logic</h4>
							</a>
							<p>
								Description - The XOR problem with neural networks can be solved by using Multi-Layer Perceptrons or a 
								neural network architecture with an input layer, hidden layer, and output layer. So during the forward
								propagation through the neural networks, the weights get updated to the corresponding layers and the 
								XOR logic gets executed.
							</p>
						</li>
						<li>
							<a href="">
								<h4><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> Doodle Classifier</h4>
							</a>
						</li>
					</ol>
				</div>
				<div className="sims">
					<h3>
						Simulations
					</h3>
					<ol>
						<li>
							<a href="">
								<h4><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> Fourier Series</h4>
							</a>
						</li>
						<li>
							<a href="">
								<h4><FontAwesomeIcon icon={faLink}></FontAwesomeIcon> Gravition Visualiser</h4>
							</a>
						</li>
					</ol>
				</div>
			</div>
			
		</motion.div>
	)
}

export default Projects;
