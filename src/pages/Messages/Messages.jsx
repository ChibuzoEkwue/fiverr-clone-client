import "./Messages.scss";
import { Link } from "react-router-dom";
const Messages = () => {
	const currentUser = {
		id: 1,
		username: "John Doe",
		isSeller: true,
	};

	const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
	Ducimus esse asperiores quas sequi, provident vitae.`;
	return (
		<div className="messages">
			<div className="container">
				<div className="title">
					<h1>Message</h1>
				</div>
				<table>
					<tr>
						<th>Buyer</th>
						<th>Last Message</th>
						<th>Date</th>
						<th>Action</th>
					</tr>
					<tr className="active">
						<td>Chibuzo Ekwue</td>
						<td><Link className="link" to='/messages/123'>{message.substring(0,100)}...</Link></td>
						<td>A day ago</td>
						<td>
							<button>Mark as Read</button>
						</td>
					</tr>

					<tr className="active">
						<td>Chibuzo Ekwue</td>
						<td><Link className="link" to='/messages/123'>{message.substring(0,100)}...</Link></td>
						<td>A day ago</td>
						<td>
							<button>Mark as Read</button>
						</td>
					</tr>
					<tr>
						<td>Chibuzo Ekwue</td>
						<td><Link className="link" to='/messages/123'>{message.substring(0,100)}...</Link></td>
						<td>A day ago</td>
					</tr>
					<tr>
						<td>Chibuzo Ekwue</td>
						<td><Link className="link" to='/messages/123'>{message.substring(0,100)}...</Link></td>
						<td>A day ago</td>
						
					</tr>
					<tr>
						<td>Chibuzo Ekwue</td>
						<td><Link className="link" to='/messages/123'>{message.substring(0,100)}...</Link></td>
						<td>A day ago</td>
						
					</tr>
					
				</table>
			</div>
		</div>
	);
};

export default Messages;
