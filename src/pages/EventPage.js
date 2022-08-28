export default function EventPage(props) {
	return (
		<main>
			<header>
				<img href="#"
				     alt="My Event Image" 
				/>
				<h1>Madeon Good Faith Live Forever</h1>
				<time dateTime="2022-10-28T19:00Z">28 August 2022 @ 19:00</time>
				<p>London, United Kingdom</p>
				<p>Madeon's Good Faith Live Show is now back with more suprises</p>
			</header>

			<section>
				<header>
					<h2>Tickets</h2>
				</header>
				
				<ul>
					<li>
						<div>Standard</div>
						<p>A seat in the show</p>
						<p>£11.99</p>
						<div className="quantity-picker">
							<button className="decrement-button">-</button>
							<input type="number" min="0" max="8" value="0" readOnly={true}/>
							<button className="increment-button">+</button>
						</div>
					</li>
					<li>
						<div>Premium</div>
						<p>A seat near or at the front row</p>
						<p>£24.99</p>
						<div className="quantity-picker">
							<button className="decrement-button">-</button>
							<input type="number" min="0" max="8" value="0" readOnly={true}/>
							<button className="increment-button">+</button>
						</div>
					</li>
				</ul>
			</section>

			<div class="floating-cta">
				<a href="#">Continue To Checkout</a>
			</div>
		</main>
	);
}