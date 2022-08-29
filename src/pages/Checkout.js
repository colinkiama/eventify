import { getEvent, getTicketInfo } from "../data";
import CheckoutItem from "../components/CheckoutItem";

export default function Checkout(props) {
	const itemData = {
		event: getEvent(props.basket.eventId),
		tickets: props.basket.items.map(x => getTicketInfo(x.eventId, x.ticketType))
	};

	console.log("Checkout item data:", itemData);

	return (
		<main>
			<header>
				<h1>Checkout</h1>
			</header>

			<section>
				<header>
					<h2>Your Details</h2>
				</header>

				<form id="checkout-form">
					<label>
						Email:<br/>
						<input name="email" type="email" autoComplete="email"/>
					</label>
				</form>
			</section>
			
			<section>
				<header>
					<h2>Your Items</h2>
				</header>
				<CheckoutItem tag="li" data={itemData} />
			</section>

			<div className="floating-cta">
				<div>Total: £24.99</div>
				<button form="checkout-form" 
						formMethod="POST"
						href="#"
				>
				Buy
				</button>
			</div>
		</main>
	);
}