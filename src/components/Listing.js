function Listing({ listing, username }) {	

	return <div className="listing-container" key={listing.id}>
		<div className="listing-image-container">
			<img src={listing.image} alt={listing.itemname} className="listing-image" />
		</div>
		<div className="listing-details">
			<h3>{listing.itemname}</h3>
			<h4>Category: {listing.category}</h4>
			<h4>Artist: {username}</h4>
			<li>{listing.tag1}</li>
			<li>{listing.tag2}</li>
			<li>{listing.tag3}</li>
			<li>{listing.tag4}</li>
			<p>{listing.description}</p>
		</div>
	</div >
}

export default Listing;
