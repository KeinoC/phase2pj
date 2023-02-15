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

  const localUser = window.localStorage.getItem('user')  // get "user" in local storage

  const navigate = useNavigate()
  const [filter, setFilter] = useState("All")
  const [user, setUser] = useState(localUser)
  const [users, setUsers] = useState([])

  const [isLoggedIn, setisLoggedIn] = useState(localUser !== "null")
  

  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [favTag, setFavTag] = useState()



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

  function onLogin(loggedUser) {
    console.log(loggedUser)
    if (loggedUser.username === admin.username && loggedUser.password === admin.password) {
      const currentUser = users.find(user => user.username === admin.username)
      window.localStorage.setItem('user', JSON.stringify(currentUser))  // set local storage to "user"
      setUser(currentUser) // update user
      setisLoggedIn(!isLoggedIn)
      navigate('/user')
      
      
    }else {
      console.log("Login Failed")
    }
    // console.log(user)
  }

  function handleLogOut(e) {
    if (e.target.value == "logout") {
      window.localStorage.setItem('user', null)  // clear user when log out by setting it to null
      setisLoggedIn(false)
      navigate('/login')
    } 
    // else if e.target.value == "user" => profolio?
  }

  function onAddListing(id, updated) {
    console.log(updated)
    setUsers([...users, updated])
  }


  const currentUserListings = users?.find(user => user.username === admin.username)?.listings ?? []

  // const currentUserLikesTags = users.find(user => user.username === admin.username)?.likedtags ?? []
  // let currentUserListings = users.filter(user => user.username === admin.username).flatMap(listing=>listing.listings)
  const currentUserListings = users.find(user => user.username === admin.username)?.listings ?? []
// console.log(users.likedtags)
//   setFavTag(getMax(currentUserLikedTags[0]))
// useEffect(() => {

// }, [])





const currentUserLikedTags = users.find(user => user.username === admin.username)?.likedtags ?? []

console.log(currentUserLikedTags)

  const getMax = object => {
    let max = Math.max(...Object.values(object))
    return Object.keys(object).filter(key => object[key]==max)
  }

console.log((getMax(currentUserLikedTags)[0]))
const test = ((getMax(currentUserLikedTags)[0]))

console.log(users)


// setFavTag(test)
// console.log(favTag)

  




// likedtags
  // likedcategory

  return (
      <div className="App">
          <Nav isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} username={admin.username}/>
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
                        <UserPage currentUserListings={currentUserListings} 
                                  username={admin.username}
                                  onAddListing={onAddListing}
                                  user={user} />
                    } 
              /> : null
            }

            <Route path="/cart" element={<Cart />} />

            <Route path="/login" element={<Login onLogin={onLogin} setUser={setUser} />} />
          </Routes>
      </div>
  );
}

export default App;
