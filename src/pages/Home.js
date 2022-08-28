import EventList from '../components/EventList';

export default function Home(props) {
	return (
		<main>
			<header>
				<h1>Be There In Person</h1>
			</header>
			<section>
				<header>
					<h2>Upcoming</h2>
					<EventList/>
				</header>
			</section>
		</main>
	)
}