import React from "react";
import { Link } from 'react-router-dom';

export default function Event(props) {
	const DynamicTag = props.tag ?? 'div';
	const data = props.data;
	const linkDestination = `event/${data.id}`;

	return (
		<DynamicTag className="event">
			<Link to={linkDestination}>
				<img src={data.image.src}
				     alt={data.image.alt} />
			</Link>
			<h3>
				<Link to={linkDestination}>{data.title}</Link>
			</h3>
			<time dateTime="{data.time.dateTime}">{data.time.text}</time>
			<p className="location">{data.location}</p>
			<p>{data.description}</p>
		</DynamicTag>
	);
}