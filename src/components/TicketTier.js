import React from "react";
import { Link } from 'react-router-dom';

export default function TicketTier(props) {
	const DynamicTag = props.tag ?? 'div';
	const data = props.data;

	return (
		<DynamicTag className="ticket-tier">
			<div>{data.title}</div>
			<p>{data.description}</p>
			<p>{data.price}</p>
			<div className="quantity-picker">
				<button className="decrement-button">-</button>
				<input type="number" min="0" max="8" value="0" readOnly={true}/>
				<button className="increment-button">+</button>
			</div>
		</DynamicTag>
	);
}