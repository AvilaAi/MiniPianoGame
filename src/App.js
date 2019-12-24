import React from 'react';
import MyPiano from './Piano';

const App = () => {
	return (
		<div className='page'>
			<div className='head'>
				<h1>
					<span className='emoji' aria-label='piano' role='img'>
						🎹
					</span>
					Mini Piano Game
				</h1>
				<h3>Play with your mouse or keyboard, have fun ! </h3>
			</div>
			<MyPiano />
			<div class='footer'>&copy; &nbsp;2019&nbsp;|&nbsp;Ai ZHANG</div>
		</div>
	);
};

export default App;
