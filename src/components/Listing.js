function Listing({
	id,
	username,
	itemName,
	image,
	category,
	description,
	tag1,
	tag2,
	tag3,
	tag4,
}) {
	return (
		<div className="listing-container">
			<div className="listing-image-container">
				<img src={image} alt={itemName} className="listing-image" />
			</div>
			<div className="listing-details">
				<h3>{itemName}</h3>
				<h4>Category: {category}</h4>
				<h4>Artist: {username}</h4>
				<li>{tag1}</li>
				<li>{tag2}</li>
				<li>{tag3}</li>
				<li>{tag4}</li>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default Listing;
