import React, {useEffect, useState} from "react"
import Nav from "./components/Nav.js"
import Gallery from "./components/Gallery.js"



function App() {

  useEffect(() => {
    fetch("http://localhost:3200/listing")
    .then(response => response.json())
    .then(data => setListings(data))
}, [])

const [listingsArray, setListings] = useState([])





  return (
    <div className="App">
      <Nav />
      <Gallery listingsArray = {listingsArray}/>
    </div>
  );
}

export default App;
