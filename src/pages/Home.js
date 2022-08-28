import EventList from '../components/EventList';
import { getEvents } from '../data';

export default function Home(props) {
	return (
		<main>
			<header>
				<h1>Be There In Person</h1>
			</header>
			<section>
				<header>
					<h2>Upcoming</h2>
					<EventList items={getEvents()}/>
				</header>
			</section>
		</main>
	)
}