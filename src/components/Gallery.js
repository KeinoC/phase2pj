import Listing from "./Listing";

function Gallery({ listingsArray }) {
	const renderedListings = listingsArray.map((listing) => {
		return (
			<Listing
				key={listing.id}
				id={listing.id}
				username={listing.username}
				itemName={listing.itemname}
				image={listing.image}
				category={listing.category}
				description={listing.description}
				tag1={listing.tag1}
				tag2={listing.tag2}
				tag3={listing.tag3}
				tag4={listing.tag4}
			/>
		);
	});

	return (
		<div>
			<div>{renderedListings}</div>
		</div>
	);
}

export default Gallery;
