import React from 'react';
import TicketTier from './TicketTier';


export default function TicketTierList(props) {
	return (
		<ul className="event-list">
			{
				props.items.map(ticketTier => {
					return (
						<TicketTier eventId={props.eventId} key={ticketTier.type} tag="li" data={ticketTier} />
					);
				})
			}
		</ul>
	)
}