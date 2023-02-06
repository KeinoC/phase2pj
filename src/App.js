import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./pages/Home/Home.js";
import UserPage from "./pages/UserPage";

function App() {
	useEffect(() => {
		fetch("http://localhost:3200/listing")
			.then((response) => response.json())
			.then((data) => setListings(data));
	}, []);

	const [listingsArray, setListings] = useState([]);

	return (
		<div className="App">
			<Nav />
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
