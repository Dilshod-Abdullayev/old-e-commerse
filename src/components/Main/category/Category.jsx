import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Category() {
	const [ posts, setPosts ] = useState([]);

	function Bum() {
		useEffect(() => {
			fetch('https://jsonplaceholder.typicode.com/photos').then((response) => response.json()).then((data) => {
				setPosts(data); // new
			});
		}, []);
	}

	return (
		<div>
			{posts.length > 0 ? (
				posts.map((item) => (
					<div>
						<img src={item.url} />
					</div>
				))
			) : (
				<h1 onClick={Bum}>Loading posts...</h1>
			)}
		</div>
	);
}
