import React, { Component } from "react";
import Item from "./Item";
import "./Homepage.scss";

class Homepage extends Component {
	state = {
		items: [
			{
				id: 1,
				name: "Mount Ventoux",
				img: "https://cdn.pixabay.com/photo/2016/09/22/21/58/mont-ventoux-1688416_960_720.jpg"
			},
			{
				id: 2,
				name: "Pikes Peak",
				img: "https://cdn.pixabay.com/photo/2018/11/07/08/24/pikes-peak-highway-3799979_960_720.jpg"
			},
			{ id: 3, name: "Zoncolan", img: "https://capovelo.com/wp-content/uploads/2016/01/col-du-galibier2.jpg" },
			{
				id: 4,
				name: "Mauna Kea",
				img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Mauna_Kea_from_the_ocean.jpg"
			},
			{ id: 5, name: "Mount Evans", img: "http://www.content.granfondoguide.com/images/gf-mt-evans-8.jpg" },
			{
				id: 6,
				name: "Mount Lemmon",
				img: "https://cdn.pixabay.com/photo/2017/08/06/10/22/mountain-2591018_960_720.jpg"
			},
			{ id: 7, name: "Angliru", img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/LuzArdidien2003.jpg" },
			{
				id: 8,
				name: "Stelvio",
				img: "https://cdn.pixabay.com/photo/2012/12/11/20/05/stelvio-yoke-69363_960_720.jpg"
			}
		]
	};

	componentDidMount() {
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
