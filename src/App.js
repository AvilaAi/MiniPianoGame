import React from 'react';
import MyPiano from './Piano';

const App = () => {
	return (
		<div className='page'>
			<div className='head'>
				<h1>
					<span className='emoji'>🎹</span>Mini Piano Game
				</h1>
				<h3>Play with your mouse or keyboard, have fun ! </h3>
			</div>
			<MyPiano />
		</div>
	);
};

export default App;
