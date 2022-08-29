export default function QuantityPicker(props) {
	return (
		<div className="quantity-picker">
			<button onClick={() => props.onChange('decrement')} 
				className="decrement-button"
				disabled={!props.canDecrement}>
				-
			</button>

			<input type="number"
				min={props.min}
				max={props.max} 
				value={props.value} 
				readOnly={true} />

			<button onClick={() => props.onChange('increment')} 
				className="increment-button"
				disabled={!props.canIncrement}>
				+
			</button>
		</div>
	)
}