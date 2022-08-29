import React from "react";
import { BasketContext } from "../BasketContext";
import QuantityPicker from "./QuantityPicker";

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

					<QuantityPicker onItemDecrement={() => onItemDecrement({ eventId: props.eventId, ticketType: data.type })}
						onItemIncrement={() => onItemIncrement({ eventId: props.eventId, ticketType: data.type })}
						canDecrement={canDecrement({ ticketType: data.type })}
						canIncrement={canIncrement({ ticketType: data.type })}
						value={setTierQuantity(items, data.type)}
						min="0"
						max="8" />
				</DynamicTag>
			)}
		</BasketContext.Consumer>
	);
}