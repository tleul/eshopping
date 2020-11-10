import React from 'react';
import { getEvents } from '../resources/fakeEventService';

class Events extends React.Component {
	state = {
		events: getEvents(),
	};
	deleteEvent = (id) => {
		this.setState({
			events: this.state.events.filter((event) => event._id !== id),
		});
	};
	render() {
		return (
			<>
				<table className='table'>
					<thead>
						<th>Title</th>
						<th>Catagory</th>
						<th>Ticket Avaliable</th>
						<th>Price</th>
					</thead>
					<tbody>
						{this.state.events.length == 0 && (
							<tr>
								<td>
									<h3 className='text-danger  text-center'>
										No data Found
									</h3>
								</td>
							</tr>
						)}
						{this.state.events.map((event) => (
							<tr key={event.id}>
								<td>{event.title}</td>
								<td>{event.category.name}</td>
								<td>{event.numberOfTicketsAvailable}</td>
								<td>{event.Price}</td>
								<td>
									<button
										onClick={() =>
											this.deleteEvent(event._id)
										}
										className='btn-danger mt-2 btn-sm '>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</>
		);
	}
}

export default Events;
