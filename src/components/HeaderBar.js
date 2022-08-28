import {Link } from "react-router-dom";

export default function HeaderBar(props) {
	return (
		<header>
			<nav>
				<Link to="/event">{props.title}</Link>
			</nav>
		</header>
	)
}
