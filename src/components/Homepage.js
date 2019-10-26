import React, { Component } from "react";
import Item from "./Item";
import "./Homepage.scss";
import seedItems from "./seedItems";
import Video from "./Video";
import Footer from "./Footer";

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
				<Video />
				{itemDisplay}
			</div>
		);
	}
}

export default Homepage;
