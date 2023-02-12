import React from "react";
import Gallery from "../../components/Gallery";

/**
 * Home Component - This component displays a Gallery component with a listingsArray prop passed down to it
 *
 * @param {Object} props - The props that are being passed to this component
 * @param {Array} props.listingsArray - An array of listings data that is used by the Gallery component
 *
 * @returns {JSX.Element} - A JSX component that displays a Gallery with the listingsArray prop
 */

const Home = ({ listingsArray }) => {
	return (
		<>
			<Gallery listingsArray={listingsArray} />
		</>
	);
};

export default Home;
