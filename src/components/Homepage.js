import React, { Component } from "react";
import Item from "./Item";
import "./Homepage.scss";
import seedItems from "./seedItems";

class Homepage extends Component {
	state = {
		items: []
	};

	componentDidMount() {
		// console.log(this.props);
		this.setState({ items: seedItems });
		// fetch all items from DB here (use Redux mapState and mapDispatch below)
		// this.props.fetchItems().then( // setState in here ).catch()
	}

	render() {
		const itemDisplay = this.state.items.map((item) => <Item {...item} key={item.id} />);

		return (
			<div className="homepage-container">
				<div className="title-container">
					<h1>The Great Climbs</h1>
					<h6>Climb with us</h6>
				</div>
				{itemDisplay}
				<div className="homepage-footer">Footer</div>
			</div>
		);
	}
}

export default Homepage;
