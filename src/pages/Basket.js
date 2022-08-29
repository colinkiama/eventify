import { getEvent, getTicketInfo } from "../data";
import BasketItem from "../components/BasketItem";
import { Link } from 'react-router-dom';

export default function Basket(props) {
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
			</section>
			
			<section>
				<header>
					<h2>Your Items</h2>
				</header>
				<BasketItem 
					tag="li" 
					data={itemData}
					canDecrement={props.basket.canIncrement}
					canIncrement={props.basket.canIncrement}
					setQuantity={props.basket.setTierQuantity}
					onQuantityChange={props.basket.onQuantityChange} />
			</section>

			<div className="floating-cta">
				<div>Total: £24.99</div>
				<Link to="/confirmation">
					Continue To Checkout
				</Link>
			</div>
		</main>
	);
}