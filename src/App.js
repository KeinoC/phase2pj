import React, {useEffect, useState} from "react"
import Nav from "./components/Nav.js"
import Gallery from "./components/Gallery.js"
import Filter from "./components/Filter.js"



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
    </div>
  );
}

export default App;
