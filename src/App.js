/**
 * The main component of the React application
 * @function
 * @returns {JSX.Element} - The main React component
 */

import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./pages/Home/Home";
import Gallery from "./components/Gallery.js";
import Filter from "./components/Filter.js";
import Cart from "./pages/Cart.js";
import Login from "./pages/Login.js";

import UserPage from "./pages/UserPage/UserPage.js";

function App() {


  const navigate = useNavigate()
    const [listingsArray, setListings] = useState([]);
  const [filter, setFilter] = useState("All")
  const [user, setUser] = useState("")
  const [users, setUsers] = useState([])
  const [isLoggedIn, setisLoggedIn] = useState(null)
  
  const admin = {
    username: "admin",
    password: "admin"
  }

  useEffect(() => {
    fetch("http://localhost:3200/users")
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])

  
  function onHandleFilter(prevFilter) {
    setFilter(prevFilter)
  }

  function onLogin(loggedUser) {
    if (loggedUser.username === admin.username && loggedUser.password === admin.password) {
      setUser(loggedUser)
      setisLoggedIn(!isLoggedIn)
      navigate('/user')
      
    }else {
      console.log("Login Failed")
    }
  }

        

    return (
        <div className="App">
            <Nav />
            <Filter onHandleFilter={onHandleFilter} />
            <Routes>
            <Route
					exact
					path="/"
					element={<Home users={users} filter={filter}/>}
				/>
				<Route path="/user" element={<UserPage users={users} />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="/login" element={<Login onLogin={onLogin} />} />
            </Routes>
        </div>
    );
}

export default App;
