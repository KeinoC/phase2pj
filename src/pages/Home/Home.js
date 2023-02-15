import React from "react";
import Gallery from "../../components/Gallery";
import Filter from "../../components/Filter"
import SearchBar from "../../components/SearchBar"

/**
 * Home Component - This component displays a Gallery component with a listingsArray prop passed down to it
 *
 * @param {Object} props - The props that are being passed to this component
 * @param {Array} props.listingsArray - An array of listings data that is used by the Gallery component
 *
 * @returns {JSX.Element} - A JSX component that displays a Gallery with the listingsArray prop
 */

function Home ({ users, filter, onHandleFilter, onSearch}){

	return (
		<div className="home-container">
			
			<div className="homepage-filters">
				<SearchBar onSearch={onSearch}/>
			 	<Filter onHandleFilter={onHandleFilter} />
			</div>
         

			{
				users.map(user => 
					<Gallery key={user.id} 
							user={user}
							filter={filter}
					/>
				)
			}
			
		</div>
	);
};

export default Home;
