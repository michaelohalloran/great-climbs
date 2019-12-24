import React, { Component } from "react";
import "./AddClimb.scss";

class AddClimb extends Component {
	// TODO add start and ending lat/lng and/or altitude to make grade calculation
	state = {
		name: "",
		altitude: 0,
		location: "",
		price: 0,
		distance: 0,
		guide: ""
	};

	handleSubmit = (e) => {
		console.log("submit");
		e.preventDefault();
		// TODO send this.state to GQL POST endpoint to make new climb in DB
		// add defaults for ratings, etc.

		// reset form values
		this.setState({
			name: "",
			altitude: 0,
			location: "",
			price: 0,
			distance: 0,
			guide: ""
		});
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: isNaN(parseInt(value)) ? value : parseInt(value)
		});
	};

	buildFormFields = () => {
		return Object.keys(this.state).map((key) => (
			<div key={key} className="climb-input-container">
				<label>{key}</label>
				<input
					type={typeof this.state[key] === "number" ? "number" : "text"}
					name={`${key}`}
					value={this.state[key]}
					onChange={this.handleChange}
					placeholder={`${key[0].toUpperCase() + key.slice(1)}`}
				/>
			</div>
		));
	};

	render() {
		// TODO: have lat/lng be auto-calculated from location?
		// TODO: have map to select location?
		// TODO: auto-calculate avgGrade
		// TODO: default ratings to 0 or n/a? (or omit?)

		return (
			<div className="climb-form-container">
				<form onSubmit={this.handleSubmit}>
					{this.buildFormFields()}
					<textarea name="desc" id="" cols="30" rows="10">
						Desc
					</textarea>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default AddClimb;
