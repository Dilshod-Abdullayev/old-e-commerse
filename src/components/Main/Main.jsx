import React from 'react';
import Navbar from '../Navbar/Navbar';
import Category from './category/Category';
import Skid from './Skid/Skid';
import Wrapper from './Wrapper/Wrapper';

export default function Main() {
	return (
		<div>
			<Navbar />
			<Wrapper />
			<Skid />	
			<Category/>
		</div>
	);
}
