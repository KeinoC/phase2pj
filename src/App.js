/**
 * The main component of the React application
 * @function
 * @returns {JSX.Element} - The main React component
 */

import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart.js";
import Login from "./pages/Login.js";

import UserPage from "./pages/UserPage/UserPage.js";

function App() {
  const prev = window.localStorage.getItem('user')
  if (prev === "undefined" || prev === '') window.localStorage.removeItem('user')
  const localUser = JSON.parse(window.localStorage.getItem('user'))  // get "user" in local storage

  const navigate = useNavigate()
  const [filter, setFilter] = useState("All")
  const [user, setUser] = useState(localUser)
  const [users, setUsers] = useState([])

  const [isLoggedIn, setisLoggedIn] = useState(localUser !== "null")




  const admin = {
    username: "bluecloud",
    password: "123"
  }

  useEffect(() => {
    fetch("http://localhost:3200/users")
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])

  
  
  function onHandleFilter(prevFilter) {
    setFilter(prevFilter)
  }

  function OnLogin(loggedUser) {
    let currentUser
    if (loggedUser.username === admin.username && loggedUser.password === admin.password) {
      currentUser = users.find(user => user.username === admin.username)
      window.localStorage.setItem('user', JSON.stringify(currentUser))  // set local storage to "user"
      // setUser(currentUser) // update user
      setisLoggedIn(!isLoggedIn)
      // console.log(currentUser)
      // console.log(user)
      navigate('/user')  
    }else {
      console.log("Login Failed")
    }
    useEffect(() => { setUser(currentUser) }, [])
  }
  function handleLogOut(e) {
    if (e.target.value === "logout") {
      window.localStorage.setItem('user', null)  // clear user when log out by setting it to null
      setisLoggedIn(false)
      navigate('/login')
    } 
    else if (e.target.value === "user") {
      navigate('/user')
    }
  }

  function onAddListing(id, updated) {
    // console.log(users[0])
    const oldUser = users.find(u => u.id === updated.id)
    const index = users.indexOf(oldUser)
    users[index] =  updated
    // console.log(users[0])
    setUsers([...users])
    setUser(updated)
    window.localStorage.setItem('user', JSON.stringify(updated))  // set local storage to "user"
  }


  const currentUserListings = users?.find(user => user.username === admin.username)?.listings ?? []

  const currentUserLikedTags =
      users.find((user) => user.username === admin.username)?.likedtags ?? [];

  const getMax = (object) => {
      let max = Math.max(...Object.values(object));
      return Object.keys(object).filter((key) => object[key] === max);
  };

    const favoriteTag = getMax(currentUserLikedTags)[0];
    
    // console.log(user)
  return (
      <div className="App">
          <Nav 
            isLoggedIn={isLoggedIn} 
            handleLogOut={handleLogOut} 
            username={admin.username}/>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home users={users} filter={filter} onHandleFilter={onHandleFilter}/>}
            />
            {isLoggedIn ?
              <Route exact 
                    path="/user" 
                    element={
                        <UserPage users = {users}
                                  favoriteTag = {favoriteTag}
                                  currentUserListings={currentUserListings} 
                                  username={admin.username}
                                  user={user}
                                  onAddListing={onAddListing} />
                    } 
              /> : null
            }

            <Route path="/cart" element={<Cart />} />

            <Route path="/login" element={<Login onLogin={OnLogin} setUser={setUser} />} />
          </Routes>
      </div>
  );
}

export default App;
