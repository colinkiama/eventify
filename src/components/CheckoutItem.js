export default function CheckoutItem(props) {
	const DynamicTag = props.tag ?? 'div';
	const data = props.data;

	return (
		<DynamicTag className="event">
			<img src={data.image.src}
				alt={data.image.alt} />
			<h3>{data.title}</h3>
			<time dateTime={data.time.dateTime}>{data.time.text}</time>
			<p className="location">{data.location}</p>
			<p>{data.description}</p>
		</DynamicTag>
	);
}