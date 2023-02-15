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
    const navigate = useNavigate();
    const [filter, setFilter] = useState("All");
    const [user, setUser] = useState("");
    const [users, setUsers] = useState([]);
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [favTag, setFavTag] = useState();

    const admin = {
        username: "bluecloud",
        password: "123",
    };

    useEffect(() => {
        fetch("http://localhost:3200/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    function onHandleFilter(prevFilter) {
        setFilter(prevFilter);
    }

    function onLogin(loggedUser) {
        console.log(loggedUser);
        if (
            loggedUser.username === admin.username &&
            loggedUser.password === admin.password
        ) {
            setUser(loggedUser);
            setisLoggedIn(!isLoggedIn);
            navigate("/user");
        } else {
            console.log("Login Failed");
        }
    }

    function handleLogOut(e) {
        if (e.target.value == "logout") {
            setisLoggedIn(false);
            navigate("/login");
        }
        // else if e.target.value == "user" => profolio?
    }


    const currentUserListings =
        users.find((user) => user.username === admin.username)?.listings ?? [];

    const currentUserLikedTags =
        users.find((user) => user.username === admin.username)?.likedtags ?? [];

    const getMax = (object) => {
        let max = Math.max(...Object.values(object));
        return Object.keys(object).filter((key) => object[key] == max);
    };

    console.log(getMax(currentUserLikedTags)[0]);
    const favoriteTag = getMax(currentUserLikedTags)[0];


    return (
        <div className="App">
            <Nav
                isLoggedIn={isLoggedIn}
                handleLogOut={handleLogOut}
                username={admin.username}
            />
            <Filter onHandleFilter={onHandleFilter} />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Home users={users} filter={filter} />}
                />
                <Route
                    exact
                    path= "/user"
                    element={
                        <UserPage
                            currentUserListings={currentUserListings}
                            username={admin.username}
                            users={users}
                            favoriteTag={favoriteTag}
                        />
                    }
                />
                <Route path="/cart" element={<Cart />} />
                <Route
                    path="/login"
                    element={<Login onLogin={onLogin} setUser={setUser} />}
                />
            </Routes>
        </div>
    );
}

export default App;
