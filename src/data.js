let events = [
	{
		id: '0',
		title: 'Madeon Good Faith Live Forever',
		image: {
			src: '',
			alt: 'In Good Faith',
		},
		time: {
			dateTime: '2022-10-28T19:00Z',
			text: '28 August 2022 @ 19:00' // <- This can be generated from the dateTime value in the future
		},
		location: 'London, United Kingdom',
		description: "Madeon's Good Faith Live Show is now back with more suprises",
	},
	{
		id: '1',
		title: 'Hope Tala Tour',
		image: {
			src: '',
			alt: 'Have Hope',
		},
		time: {
			dateTime: '2022-12-01T18:00Z',
			text: '1 December 2022 @ 18:00' // <- This can be generated from the dateTime value in the future
		},
		location: 'Manchester, United Kingdom',
		description: "Support a great artist on the rise!",
	},
	{
		id: '2',
		title: 'Bilie Eilish - Happier Than Ever Tour',
		image: {
			src: '',
			alt: "You'll be happier than ever!",
		},
		time: {
			dateTime: '2023-01-31T17:00Z',
			text: '31 January 2023 @ 17:00' // <- This can be generated from the dateTime value in the future
		},
		location: 'London, United Kingdom',
		description: "Billie is happier than ever",
	},
]

let tickets = [
	{
		eventId: '0',
		tiers: [
			{
				type: 'standard',
				eventId: '0',
				title: 'Standard',
				price: '£11.99',
				description: 'A seat with a decent view'
			},
			{
				type: 'premium',
				eventId: '0',
				title: 'Premium',
				price: '£24.99',
				description: 'A seat near or at the front row'
			}
		]
	},
	{
		eventId: '1',
		tiers: [
			{
				type: 'standard',
				eventId: '1',
				title: 'Standard',
				price: '£9.99',
				description: 'A seat with a decent view'
			},
			{
				type: 'premium',
				eventId: '1',
				title: 'Premium',
				price: '£14.99',
				description: 'A seat near or at the front row'
			}
		]
	},
	{
		eventId: '2',
		tiers: [
			{
				type: 'standing',
				eventId: '2',
				title: 'Standing',
				price: '£4.99',
				description: 'Gain entry with no seating'
			},
			{
				type: 'standard',
				eventId: '2',
				title: 'Standard',
				price: '£14.99',
				description: 'A seat with a decent view'
			},
			{
				type: 'premium',
				title: 'Premium',
				price: '£39.99',
				description: 'A seat near or at the front row'
			}
		]
	},
]

export function getEvents() {
	return events;
}

export function getEvent(id) {
	return events.find(event => event.id === id); 
}

export function getTicketTiers(eventId) {
	const ticketData = tickets.find(ticketData => ticketData.eventId === eventId);
	if (!ticketData) {
		return [];
	}

	return ticketData.tiers;
}


export function getTicketInfo(eventId, type) {
	const ticketTiers = getTicketTiers(eventId);
	if (!ticketTiers) {
		return {};
	}

	return ticketTiers.find(tier =>  tier.type === type) ?? {};
}