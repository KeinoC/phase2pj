import React, { useState } from "react";
import AddListingForm from "../../components/AddListingForm.js";
import Listing from "../../components/Listing.js";
////setting state for if user is logged in or not


function UserPage( {currentUserListings, username, onAddListing, users, user, favoriteTag} ) {
    
    let array = []
    function test () {
        for (let i = 0; i < users.length; i++) {
            const userX = users[i]
            const userListings = userX.listings
            for (let j = 0; j < userListings.length; j++) {
                const listing = userListings[j]
                if (listing.tag1 === favoriteTag || listing.tag2 ===favoriteTag || listing.tag3 ===favoriteTag || listing.tag4 ===favoriteTag) {
                    array.push(listing)
                }
            }
        }   
    }

    test()

    const [featureCount, setFeatureCount] = useState(4);
    const [myListCount, setMyListCount] = useState(4);

    function handleFeatureCount(e) {
        e.preventDefault();
        setFeatureCount(parseInt(e.target.value));
    }
    function handleMyListCount(e) {
        e.preventDefault();
        setMyListCount(parseInt(e.target.value));
    }


    const renderedFeaturedArray = [...array].splice(0, featureCount);
    const renderedMyListingsArray = [...currentUserListings].splice(0, myListCount);


    return (
        <div>
            <AddListingForm  onAddListing={onAddListing} user={user}/>
            <div className="featured-container">
                <select onChange={handleFeatureCount} value={featureCount}>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                </select>
                <div>
                <div>{renderedFeaturedArray.map(listing => <Listing key={listing.itemname} listing={listing}/>)}</div>
                </div>
            </div>
            <div className="my-listings-container">
                <select onChange={handleMyListCount} value={myListCount}>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                </select>
                <div>{renderedMyListingsArray.map(listing => <Listing key={listing.itemname} listing={listing} username={username}/>)}</div>
            </div>
            
        </div>
    );
}

export default UserPage;
