import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { getEvent, getTicketTiers } from '../data';
import TicketTierList from '../components/TicketTierList';


export default function Event(props) {
	const params = useParams();
	const eventData = getEvent(params.eventId);
	const ticketTiers = getTicketTiers(params.eventId);

	return (
		<main>
			<header>
				<img src={eventData.image.src}
					alt={eventData.image.alt} 
				/>
				<h1>{eventData.title}</h1>
				<time dateTime={eventData.time.dateTime}>{eventData.time.text}</time>
				<p>{eventData.location}</p>
				<p>{eventData.description}</p>
			</header>

			<section>
				<header>
					<h2>Tickets</h2>
				</header>
				
				<TicketTierList eventId={eventData.id} items={ticketTiers} />
			</section>

			<div className="floating-cta">
				<Link to="/checkout">Continue To Checkout</Link>
			</div>
		</main>
	);
}