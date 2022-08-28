export default function CheckoutPage(props) {
	return (
		<main>
			<header>
				<h1>Checkout</h1>
			</header>

			<section>
				<header>
					<h2>Your Details</h2>
				</header>

				<form id="checkout-form">
					<label>
						Email:<br/>
						<input name="email" type="email" autoComplete="email"/>
					</label>
				</form>
			</section>
			
			<section>
				<header>
					<h2>Your Items</h2>
				</header>
				<ul>
					<li>
						<img src="#"
						     alt="My Event Image"
						>
						</img>
						<h3>
							<a href="#">Madeon Good Faith Live Forever</a>
						</h3>
						<time dateTime="2022-10-28T19:00Z">28 August 2022 @ 19:00</time>
						<p>London, United Kingdom</p>

						<ul>
							<div>Standard</div>
							<p>A seat in the show</p>
							<p>£11.99</p>
							<div className="quantity-picker">
								<button className="decrement-button">-</button>
								<input type="number" min="0" max="8" value="0" readOnly={true}/>
								<button className="increment-button">+</button>
							</div>
						</ul>
					</li>
				</ul>
			</section>

			<div class="floating-cta">
				<div>Total: £24.99</div>
				<button form="checkout-form" 
						formMethod="POST"
						href="#"
				>
				Buy
				</button>
			</div>
		</main>
	);
}