import React from "react";
import Gallery from "../../components/Gallery";

const Home = ({ listingsArray }) => {
	return (
		<>
			<Gallery listingsArray={listingsArray} />
		</>
	);
};

export default Home;
