import React from "react";
import "./Item.scss";

const Item = ({ name, img }) => {
	return (
		<div className="homepage-item">
			<img src={img} alt={name} />
			<h3>{name}</h3>
		</div>
	);
};

export default Item;
