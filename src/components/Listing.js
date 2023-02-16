
function Listing({ listing, handleNewLikes, user, handleUpdatedPatch, users }) {	

	const localUser = JSON.parse(window.localStorage.getItem('user'))
	
		

	function handlePatchModern () {


		fetch(`http://localhost:3200/users/${localUser.id}`, {
			method: "PATCH",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				likedtags: {
					// modern: user.likedtags.modern +=1,
					// shiny: user.likedtags.shiny

				}
			})
})
.then((res) => res.json())
.then((data) => window.localStorage.setItem('user', data))


}



	return <div className="listing-container" key={listing.id}>
		<div className="listing-image-container">
			<img src={listing.image} alt={listing.itemname} className="listing-image" />
		</div>
		<div className="listing-details">
			<h3>{listing.itemname}</h3>
			<h4>Category: {listing.category}</h4>
			<h4>Artist: {listing.artist}</h4>
			<li>{listing.tag1}</li>
			{/* <li>{listing.tag2}</li>
			<li>{listing.tag3}</li>
			<li>{listing.tag4}</li> */}
			<p>{listing.description}</p>
			<button onClick = {handlePatchModern}
				value={listing.tag1}
			>Add to Favorite</button>
		</div>
	</div >
}

export default Listing;
