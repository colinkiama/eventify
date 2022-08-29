export default function QuantityPicker(props) {
	return (
		<div className="quantity-picker">
			<button onClick={() => props.onItemDecrement()} 
				className="decrement-button"
				disabled={!props.canDecrement}>
				-
			</button>

			<input type="number"
				min={props.min}
				max={props.max} 
				value={props.value} 
				readOnly={true} />

			<button onClick={() => props.onItemIncrement()} 
				className="increment-button"
				disabled={!props.canIncrement}>
				+
			</button>
		</div>
	)
}