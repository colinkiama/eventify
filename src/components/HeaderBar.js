import {Link } from "react-router-dom";

export default function HeaderBar(props) {
	return (
		<header>
			<nav>
				<Link to="/">{props.title}</Link>
			</nav>
		</header>	
	)
}
