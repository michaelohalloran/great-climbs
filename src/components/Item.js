import React from "react";
import "./Item.scss";
import { withRouter, Link } from "react-router-dom";

const Item = ({ img, name, linkUrl }) => {
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
				<p>Length: </p>
				<p>Average grade: </p>
				<p>Price: </p>
			</div>
		</div>
	);
};

export default withRouter(Item);
