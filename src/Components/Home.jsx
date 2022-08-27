import React, { useState } from 'react';
import Header from './Header';
import Interests from './Interests';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const Home = props => {
	const [navSelected, setNav] = useState('header');

	return (
		<div className="home">
			{ navSelected === 'header' ? <Header setNav={setNav} /> : "" }
			{ navSelected === 'interests' ? <Interests setNav={setNav} /> : "" }
			{ navSelected === 'projects' ? <Projects  setNav={setNav} /> : "" }
			{ navSelected === 'about me' ? <About setNav={setNav} /> : "" }
			{ navSelected === 'contact' ? <Contact setNav={setNav} /> : "" }
		</div>
	)
}

export default Home;