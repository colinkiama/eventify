import React from 'react';

export default class EventList extends React.Component {
	render() {
		return (
			<ul>
				<li>
					<a href="#">
						<img src="#"
						     alt="My Event Image"
						>
						</img>
					</a>
					<h3>
						<a href="#">Madeon Good Faith Live Forever</a>
					</h3>
					<time dateTime="2022-10-28T19:00Z">28 August 2022 @ 19:00</time>
					<p>London, United Kingdom</p>
					<p>Madeon's Good Faith Live Show is now back with more suprises</p>
					<a href="#">Order Now</a> 
				</li>
			</ul>
		)
	}
}