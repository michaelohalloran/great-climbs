import React, { Component } from "react";
import Item from "./Item";
import ClimbList from "./ClimbList";
import "./Homepage.scss";
import seedItems from "./seedItems";
import Video from "./Video";

class Homepage extends Component {
	state = {
		climbs: []
	};

	componentDidMount() {
		// console.log(this.props);
		this.setState({ climbs: seedItems });
		// fetch all items from DB here (use Redux mapState and mapDispatch below)
		// this.props.fetchItems().then( // setState in here ).catch()
	}

	render() {
		// const itemDisplay = this.state.climbs.map((climb) => <Item {...climb} key={climb.id} />);

		return (
			<div className="homepage-container">
				<Video />
				<ClimbList climbs={this.state.climbs} />
				{/* {itemDisplay} */}
			</div>
		);
	}
}

export default Homepage;
