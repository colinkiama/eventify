import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { getEvent, getTicketTiers } from '../data';
import TicketTierList from '../components/TicketTierList';
import { useEffect } from 'react';


export default function Event(props) {
	const params = useParams();
	const eventData = getEvent(params.eventId);
	const ticketTiers = getTicketTiers(params.eventId);

	useEffect(() => {
		props.basket.initializeBakset(params.eventId);
	}, [props.basket, params.eventId]);

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
				
				<TicketTierList eventId={eventData.id} items={ticketTiers} itemProps={props.basket} />
			</section>

			<div className="floating-cta">
				<Link to="/basket">View Basket</Link>
			</div>
		</main>
	);
}