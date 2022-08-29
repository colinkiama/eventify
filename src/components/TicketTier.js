import React from "react";
import QuantityPicker from "./QuantityPicker";
export default function TicketTier(props) {
	const DynamicTag = props.tag ?? 'div';
	const data = props.data;

	function onValueChange(changeType) {
		props.onQuantityChange({
			type: changeType,
			item: data
		});
	}

	return (
		<DynamicTag className="ticket-tier">
			<div>{data.title}</div>
			<p>{data.description}</p>
			<p>{data.price}</p>

			<QuantityPicker
				onChange={onValueChange}
				canDecrement={props.canDecrement}
				canIncrement={props.canIncrement}
				value={props.value}
				min="0"
				max="8" />
		</DynamicTag>
	);
}