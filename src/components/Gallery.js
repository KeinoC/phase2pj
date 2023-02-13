import Listing from "./Listing";
import UserPage from "../pages/UserPage/UserPage.js";

function Gallery({user, filter}) {
	const {id, username, password, likedtags, likedcategory, listings} = user	
	
	const filterResults = listings?.filter(listing =>  {
		if (filter === "All" ) {
			return listing
		} else {
			return listing.category === filter
		}
		
		})

	return (

		filterResults.map(listing => 
			<Listing
				key={listing.itemname}
				listing={listing}
				username={username}
				filter={filter}
			/>
		))
}

export default Gallery;
