import React, { useState } from "react";
import Listing from "../../components/Listing.js";
////setting state for if user is logged in or not

function UserPage( {currentUserListings, username} ) {


    const [featureCount, setFeatureCount] = useState(4);
    const [myListCount, setMyListCount] = useState(4);

    function handleFeatureCount(e) {
        e.preventDefault();
        setFeatureCount(parseInt(e.target.value));
    }
    function handleMyListCount(e) {
        e.preventDefault();
        setFeatureCount(parseInt(e.target.value));
    }


    const renderedFeaturedArray = [...currentUserListings].splice(0, featureCount);
    const renderedMyListingsArray = [...currentUserListings].splice(0, featureCount);



    return (
        <div>
            <div className="featured-container">
                <select onChange={handleFeatureCount} value={featureCount}>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                </select>
                <div>{renderedFeaturedArray.map(listing => <Listing key={listing.itemname} listing={listing} username={username}/>)}</div>
            </div>
            <div className="my-listings-container">
                <select onChange={handleMyListCount} value={featureCount}>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                </select>
                
            </div>
            <div>{renderedMyListingsArray.map(listing => <Listing key={listing.itemname} listing={listing} username={username}/>)}</div>
        </div>
    );
}

export default UserPage;
