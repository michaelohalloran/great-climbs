import React, { Component } from "react";
import "./Signin.scss";

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			name: "",
			displayName: ""
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// submit to backend here
		this.setState({
			email: "",
			name: "",
			displayName: ""
		});
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		const displayInput = this.props.isSignup ? (
			<input
				type="text"
				name="displayName"
				placeholder="Display Name"
				required
				value={this.state.displayName}
				onChange={this.handleChange}
			/>
		) : null;

		const headerText = this.props.isSignup ? "I have an account" : "I don't have an account";

		return (
			<form className="signin-container" onSubmit={this.handleSubmit}>
				<h4>{headerText}</h4>
				{displayInput}
				<input
					type="email"
					name="email"
					placeholder="Email"
					required
					value={this.state.email}
					onChange={this.handleChange}
				/>
				<input type="password" name="password" placeholder="Password" required onChange={this.handleChange} />
				<button>{this.props.btnText}</button>
			</form>
		);
	}
}

export default Signin;
