import {useState} from "react"


function Listing({ listing }) {	

	const [like, setLike] = useState(false)

	const toggleLike = like ? "Unlike" : "Like"

	function handleLikeClick() {
		setLike(!like)
	}

	return (
	<div className="listing-container" key={listing.id}>
		<div className="listing-image-container">
			<img src={listing.image} alt={listing.itemname} className="listing-image" />
		</div>
		<div className="listing-details">
			<h3>{listing.itemname}</h3>
			<p>Category: {listing.category}</p>
			<p>Artist: {listing.artist}</p>
			<p>{listing.tag}</p>
			<p>{listing.description}</p>
			<button className="like-btn" onClick={(handleLikeClick)}>{toggleLike}</button>
		</div>
	</div >
	)
}

export default Listing;
