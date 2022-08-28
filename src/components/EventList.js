import React from 'react';
import Event from './Event';


export default function EventList(props) {
	return (
		<ul className="event-list">
			{
				props.items.map(eventItem => {
					return (
						<Event key={eventItem.id} tag="li" data={eventItem} />
					);
				})
			}
		</ul>
	)
}