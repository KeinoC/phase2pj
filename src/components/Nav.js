import { NavLink, useNavigate } from "react-router-dom";



function Nav({ isLoggedIn, handleLogOut, username }) {
    const history = useNavigate();

    function handleCartClick() {
        history.push("/cart");
    }

    return (
        <div id="navbar">
            <NavLink to="/" style={{ marginRight: "10px" }}>
                Home
            </NavLink>

            {isLoggedIn ? (
                <>  
                    <NavLink to="/user" style={{ marginRight: "10px" }}>
                        My Listings
                    </NavLink>
                    <NavLink
                        to="/cart"
                        onClick={handleCartClick}
                        style={{ marginRight: "10px" }}>
                        Cart
                     </NavLink>
                    <select defaultValue="default" onChange={handleLogOut}>
                        <option value="default" disabled >Hi {username}!</option>
                        <option value="logout" style={{ marginRight: "10px" }}>
                            Log out
                        </option>
                    </select>
                    
                </>

            ) : (
                <>
                    <NavLink to="/login" style={{ marginRight: "10px" }}>
                        Log In
                    </NavLink>
                </>
                
            )}

            {/* {isLoggedIn ? (
                <NavLink
                    to="/cart"
                    onClick={handleCartClick}
                    style={{ marginRight: "10px" }}
                >
                    Cart
                </NavLink>
            ) : null} */}
        </div>
    );
}

export default Nav;
