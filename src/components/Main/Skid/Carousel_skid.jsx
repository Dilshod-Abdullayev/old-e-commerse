import { Carousel } from 'antd';
import React from 'react';
import { skidka } from '../../../Data/Data';
import './Skid.css'
const contentStyle = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79'
};
export default function Carousel_skid() {
	return (
		<div className='Carousel_skid'>
			<Carousel autoplay>
				{skidka.map((item, index) => <img src={item} key={index} />)}
			</Carousel>
		</div>
	);
}
