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
			<div class='footer' onClick={() => window.open('https://github.com/AvilaAi/MiniPianoGame', '_blank')}>
				* Better performance on Chrome or Firefox &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&copy; &nbsp;2019&nbsp;|&nbsp;Ai
				ZHANG | &nbsp;See more information
			</div>
		</div>
	);
};

export default App;
