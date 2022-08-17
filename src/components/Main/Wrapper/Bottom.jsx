import React from 'react';
import { info } from '../../../Data/Data';
import './Wrapper.css'
export default function Bottom() {
	return (
		<div className='bottom'>
			{info.map((item, index) => (
				<div className='bottom_box' key={index}>
					{item.num}
					<p>{item.text}</p>
				</div>
			))}
		</div>
	);
}
