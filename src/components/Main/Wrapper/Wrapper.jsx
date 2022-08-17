import React from 'react';
import Wrapper_Left from './Wrapper_Left';
import Wrapper_right from './Wrapper_right';
import './Wrapper.css';
import Bottom from './Bottom';

export default function Wrapper() {
	return (
		<div>
			<div className="wrapper">
				<Wrapper_Left />
				<Wrapper_right />
			</div>
			<Bottom />
		</div>
	);
}
