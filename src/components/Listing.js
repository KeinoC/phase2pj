
function Listing({ listing, handleNewLikes }) {	

    const tag1 = listing.tag1
    const tag2 = listing.tag2
    const tag3 = listing.tag3
    const tag4 = listing.tag4


	return <div className="listing-container" key={listing.id}>
		<div className="listing-image-container">
			<img src={listing.image} alt={listing.itemname} className="listing-image" />
		</div>
		<div className="listing-details">
			<h3>{listing.itemname}</h3>
			<h4>Category: {listing.category}</h4>
			<h4>Artist: {listing.artist}</h4>
			<li>{listing.tag1}</li>
			<li>{listing.tag2}</li>
			<li>{listing.tag3}</li>
			<li>{listing.tag4}</li>
			<p>{listing.description}</p>
			<button onClick = {handleNewLikes}
				value={listing.tag1}
			>Add to Favorite</button>
		</div>
	</div >
}

export default Listing;
