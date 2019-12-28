import React, { useState } from "react";
import "./Climb.scss";
import Button from "./Button";
import Modal from "./Modal";

const Climb = (props) => {
	const [ show, toggleShow ] = useState(false);
	const { img, name, testimonials, length, grade, price } = props.climb;

	console.log("climb props:", props);
	const style = {
		backgroundImage: `url("${img}"`
	};
	console.log("style: ", style);

	const handlePurchase = () => {
		console.log("toggled, show: ", show);
		// if user is not logged in, re-route them to signin/signup page
		// perhaps include alert msg letting them know they must be signed in

		// if user is signed in, store this climbId and/or its price,
		// and route to stripe component and/or open modal for payment
		toggleShow(!show);
	};

	const reviews = testimonials.map(({ name, review }) => {
		return (
			<div className="climb-review" key={name}>
				Name: {name}
				<br />
				Review: {review}
			</div>
		);
	});

	return (
		<div className="climb-container">
			<h2>{name}</h2>
			<div className="climb-top-img" style={style} />
			{/* <img src={props.climb.img} alt={props.climb.name} /> */}
			{/* INCLUDE CLIMB INFO PROP BOX HERE (HOVER or MODAl?) */}
			<div className="map">Map here</div>
			<div>Grade: {grade ? `${grade}% grade` : "No grade available"}</div>
			<div>Length: {length ? `${length} miles` : "No distance found"}</div>
			<div>Price: {price ? `$${price}` : "No price found"}</div>
			{reviews}
			<div>Show modal: {show ? "Showing" : "Hiding"}</div>
			{show && <Modal handleClick={() => toggleShow(!show)} />}
			<p>
				DESC: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda sequi natus vero ea culpa
				excepturi consequatur numquam dolorum voluptatem, eos, exercitationem explicabo pariatur reprehenderit
				modi cumque iure quibusdam earum molestiae, neque magni aperiam distinctio magnam unde? Voluptatibus
				consectetur quos temporibus obcaecati illum error cum adipisci eum doloremque soluta fuga iusto
				accusamus quo cupiditate alias animi modi aliquid illo debitis pariatur, in, autem expedita
				necessitatibus quisquam. Quibusdam laudantium exercitationem odio asperiores, culpa accusantium ex quo
				reprehenderit odit debitis explicabo placeat libero laboriosam numquam nostrum unde voluptatum iure
				ipsa! Iure harum eos dolorum aut alias placeat? Adipisci quam corrupti quas corporis autem, cupiditate
				amet dolore error dolor sed, eius soluta ipsum beatae natus ab harum optio esse sint rem, magni hic
				atque! Temporibus unde voluptatibus beatae atque reiciendis ad voluptates et dolor, obcaecati libero
				voluptatem possimus corporis adipisci! Consequatur repudiandae quasi autem recusandae facilis dolorem?
				Doloribus, officiis similique? Ipsum ad neque alias soluta nihil perferendis, laboriosam repudiandae
				veritatis necessitatibus in consectetur nisi optio fugit officia aut at? Doloribus eius impedit quaerat,
				aut culpa sit molestias pariatur inventore voluptate animi quisquam fuga consequuntur maxime laudantium
				eveniet explicabo ratione. Quidem consequuntur odit quisquam, necessitatibus tempora facilis veritatis,
				autem adipisci vero labore atque ipsa sint?
			</p>
			{/* <Button text="Purchase" onClick={() => setCount(count + 1)} /> */}
			<Button style={{ margin: "2%" }} text="Purchase" onClick={() => handlePurchase()} />
		</div>
	);
};

export default Climb;
