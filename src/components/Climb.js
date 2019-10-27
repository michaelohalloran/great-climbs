import React from "react";
import "./Climb.scss";

const Climb = (props) => {
	console.log("climb props:", props);
	const style = {
		backgroundImage: `url("${props.climb.img}"`
	};
	console.log("style: ", style);

	return (
		<div className="climb-container">
			<div className="climb-top-img" style={style} />
			{/* <img src={props.climb.img} alt={props.climb.name} /> */}
			{/* INCLUDE CLIMB INFO PROP BOX HERE (HOVER or MODAl?) */}
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium hic optio fugit omnis, atque
				temporibus eveniet? Tempore consectetur voluptatem deserunt modi? Distinctio nobis eligendi explicabo.
				Reiciendis molestias optio maiores voluptatibus facilis, ipsum necessitatibus quisquam, iste itaque
				consequuntur quas iusto! Magni ipsam dolorum veritatis exercitationem eos sequi ad temporibus, tempore
				laudantium. Cupiditate ad voluptates repellendus temporibus neque, rerum, perferendis quo facilis odio
				quidem exercitationem. Quisquam reiciendis praesentium quos, asperiores officiis inventore quis? Amet
				dignissimos consequatur repellendus debitis, incidunt placeat sed sit? Odit laudantium qui beatae! Ipsam
				nemo est nulla, soluta beatae dicta, maiores atque officiis at voluptatem voluptas? Quibusdam dolorum
				tempore itaque harum suscipit, voluptatum natus consequatur porro maxime repellat! Facere quam ducimus
				rerum saepe dolor eum debitis provident voluptatem sit. Temporibus ipsum odit deleniti dolore quod iste
				illum? Velit asperiores corrupti molestias? Eligendi est in sit voluptate perferendis quam dolorum velit
				nam quia, aut debitis rem numquam reiciendis veniam molestiae. Maxime vel animi assumenda exercitationem
				explicabo delectus at rerum quis quaerat, iusto quas reiciendis dolorum cumque atque itaque, officiis
				dolor voluptatibus in a eligendi voluptatem eum minima aliquam? Eum molestiae placeat, vel fugit,
				adipisci esse eaque voluptatibus laborum, saepe cumque veritatis perferendis maxime recusandae deserunt
				totam laboriosam alias voluptas. Expedita pariatur ex similique perspiciatis voluptate dignissimos
				doloremque nam reiciendis beatae earum ea recusandae, suscipit quasi totam exercitationem! Nulla
				sapiente voluptates voluptate quae quaerat pariatur temporibus beatae consectetur consequatur
				accusantium, corporis atque est aliquam amet delectus dolorum, eaque iste magni nam facere saepe,
				incidunt deserunt. Architecto quasi perspiciatis laborum perferendis. Quibusdam voluptatem molestiae
				unde illum deleniti, cum placeat exercitationem iusto, impedit, eaque enim odit aspernatur corporis
				vitae quisquam eius culpa harum ex odio animi deserunt adipisci tempore dolores. Non illum inventore
				cupiditate sapiente quasi quam voluptate corporis necessitatibus maxime mollitia. Natus neque suscipit
				maxime eos ea cupiditate cum beatae perferendis nisi.
			</p>
		</div>
	);
};

export default Climb;
