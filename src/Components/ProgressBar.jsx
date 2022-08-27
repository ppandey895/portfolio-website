import React from 'react';

const ProgressBar = ({ perct, name }) => {
	const factor = perct / 1.2;
	const angle = 360 + factor - perct * 3.6;
	return (
		<div className="dashboard">
		  <svg>
		    <circle className="bg" cx="75" cy="75" r="45" 
		    style={{ strokeDashoffset: angle }}/>
		    <circle className="meter" cx="75" cy="75" r="45"
		    style={{ strokeDashoffset: angle }} />
		  </svg>
	    <span className="title">{ name }</span>
		</div>
	)
}

export default ProgressBar;