import React, { useState } from "react";
import Listing from "../../components/Listing.js";
////setting state for if user is logged in or not

function UserPage() {

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

    // const splicedFeaturedArray = [...listing].splice(0, featureCount);
    // //listingArray is the original gallery.
    // //this needs to be replaced with the array that we generate based on user likes
    // const featuredList = splicedFeaturedArray.map((listing) => {
    //     return (
    //         <Listing
    //             key={listing.id}
    //             id={listing.id}
    //             // username={listing.username}
    //             // itemName={listing.itemname}
    //             // image={listing.image}
    //             // category={listing.category}
    //             // description={listing.description}
    //             // tag1={listing.tag1}
    //             // tag2={listing.tag2}
    //             // tag3={listing.tag3}
    //             // tag4={listing.tag4}
    //         />
    //     );
    // });


    // const test = users.map(user => 
    //         <Listing key={user.id} 
    //                 user={user}
    //                 filter={filter}
    //         />
    //     )



    // const splicedMyListingsArray = [...listing].splice(0, featureCount);
    // //listingArray is the original gallery.
    // //this needs to be generated using the user new data structure
    // const myListings = splicedMyListingsArray.map((listing) => {
    //     return (
    //         <Listing
    //             key={listing.id}
    //             id={listing.id}
    //             username={listing.username}
    //             itemName={listing.itemname}
    //             image={listing.image}
    //             category={listing.category}
    //             description={listing.description}
    //             tag1={listing.tag1}
    //             tag2={listing.tag2}
    //             tag3={listing.tag3}
    //             tag4={listing.tag4}
    //         />
    //     );
    // });

    return (
        <div>
            <div className="featured-container">
                <select onChange={handleFeatureCount} value={featureCount}>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                </select>
                {/* {featuredList} */}
            </div>
            <div className="my-listings-container">
                <select onChange={handleMyListCount} value={featureCount}>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                </select>
                {/* {myListings} */}
            </div>
        </div>
    );
}

export default UserPage;
