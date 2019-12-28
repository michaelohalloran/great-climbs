import React from "react";
import "./Item.scss";
import { withRouter, Link } from "react-router-dom";

const Item = ({ img, name, linkUrl, length, price, grade }) => {
	// const openModal = (e) => {
	// 	console.log(e);
	// };

	// console.log(props);

	return (
		<div className="card-container">
			<div className="front-item">
				<img src={img} alt={name} />
				{/* <button onClick={openModal} className="homepage-btn">
						{name}
					</button> */}
				<Link to={`/climb/${linkUrl}`} className="homepage-btn">
					{name}
				</Link>
			</div>
			<div className="back-item">
				<Link to={`/climb/${linkUrl}`} className="homepage-btn">
					{name}
				</Link>
				<p>Length: {length} miles</p>
				<p>Average grade: {grade}%</p>
				<p>Price: ${price} </p>
			</div>
		</div>
	);
};

export default withRouter(Item);
