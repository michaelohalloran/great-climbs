import React, { Component } from "react";
import "./Signin.scss";
import Input from "./Input";

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			name: ""
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// submit to backend here
		this.setState({
			email: "",
			name: ""
		});
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div className="form-container">
				<form className="signin-container" onSubmit={this.handleSubmit}>
					<Input
						type="email"
						name="email"
						placeholder="Email"
						required
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<Input
						type="password"
						name="password"
						placeholder="Password"
						required
						onChange={this.handleChange}
					/>
					<button>Sign in</button>
				</form>

				<form className="signup-container" onSubmit={this.handleSubmit}>
					<Input
						type="email"
						name="email"
						placeholder="Email"
						required
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<Input
						type="password"
						name="password"
						placeholder="Password"
						required
						onChange={this.handleChange}
					/>
					<button>Sign up</button>
				</form>
			</div>
		);
	}
}

export default Signin;
