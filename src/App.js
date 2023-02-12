

/**
 * The main component of the React application
 * @function
 * @returns {JSX.Element} - The main React component
 */

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./pages/Home/Home";
import Gallery from "./components/Gallery.js"
import Filter from "./components/Filter.js"

import UserPage from "./pages/UserPage/UserPage.js";



function App() {
  const [listingsArray, setListings] = useState([])
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    fetch("http://localhost:3200/listing")
    .then(response => response.json())
    .then(data => setListings(data))
  }, [])


  function onHandleFilter(prevFilter) {
    console.log(prevFilter)
    setFilter(prevFilter)
  }

  const filterResults = listingsArray?.filter(listing => {
    
    if (filter === "All") {
      return listing
    } else {
      return listing.category === filter
      
    }
      
  })


  return (
    <div className="App">
      <Nav />
      <Filter onHandleFilter={onHandleFilter} />
      <Gallery listingsArray = {filterResults}/>

      <Routes>
				<Route
					exact
					path="/"
					element={<Home listingsArray={listingsArray} />}
				/>
				<Route path="/user" element={<UserPage />} />
			</Routes>
    </div>
  );

}

export default App;
