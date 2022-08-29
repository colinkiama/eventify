import React from "react";
import { BasketContext } from "../BasketContext";

export default function TicketTier(props) {
	const DynamicTag = props.tag ?? 'div';
	const data = props.data;

	function setTierQuantity(basketItems, type) {
		let basketItem = basketItems.find(item => item.ticketType === type);
		if (!basketItem) {
			return "0";
		}

		return `${basketItem.quantity}`;
	}

	return (
		<BasketContext.Consumer>
			{({ items, onItemDecrement, onItemIncrement, canIncrement, canDecrement }) => (
				<DynamicTag className="ticket-tier">
					<div>{data.title}</div>
					<p>{data.description}</p>
					<p>{data.price}</p>
					<div className="quantity-picker">
						<button onClick={() => onItemDecrement({ eventId: props.eventId, ticketType: data.type })} 
								className="decrement-button"
								disabled={!canDecrement({ ticketType: data.type })}>
							-
						</button>

						<input type="number"
						       min="0"
							   max="8" 
							   value={setTierQuantity(items, data.type)} 
							   readOnly={true} />

						<button onClick={() => onItemIncrement({ eventId: props.eventId, ticketType: data.type })} 
								className="increment-button"
								disabled={!canIncrement({ ticketType: data.type })}>
							+
						</button>
					</div>
				</DynamicTag>
			)}
		</BasketContext.Consumer>
	);
}