import React from 'react';
import MyPiano from './Piano';
const App = () => {
	return (
		<div className='page'>
			<h1>Mini Piano</h1>
			<h3>You can play with your mouse or keyboard, have fun!</h3>
			<MyPiano />
		</div>
	);
};

export default App;
