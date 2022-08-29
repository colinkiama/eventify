import QuantityPicker from "./QuantityPicker";

export default function BasketItem(props) {
	const data = props.data;
	console.log("Checkout Item Props:", props);

	return (
		<div className="checkout-item">
			<img src={data.event.image.src}
				alt={data.event.image.alt} />
			<h3>{data.event.title}</h3>
			<time dateTime={data.event.time.dateTime}>{data.event.time.text}</time>
			<p className="location">{data.event.location}</p>

			<ul>
				{ data.tickets.map(ticket => {

					function onValueChange(changeType) {
						props.onQuantityChange({
							type: changeType,
							item: ticket
						});
					}

					return (
						<li key={ticket.type}>
							<h4>{ticket.title}</h4>
							<div>{ticket.price}</div>

							<QuantityPicker
								onChange={onValueChange}
								canDecrement={props.canDecrement}
								canIncrement={props.canIncrement}
								value={props.setQuantity(ticket)}
								min="0"
								max="8" />
						</li>
					)
				})}
			</ul>
		</div>
	);
}