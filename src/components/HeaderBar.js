export default function HeaderBar(props) {
	return (
		<header>
			<nav>
				<a href="/">{props.title}</a>
			</nav>
		</header>
	)
}
