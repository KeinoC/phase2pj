import { NavLink, useNavigate } from "react-router-dom";

function Nav({ isLoggedIn, handleLogOut, username }) {
    const history = useNavigate();

    function handleCartClick() {
        history.push("/cart");
    }

    return (
        <div>
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
                    <select onChange={handleLogOut}>
                        <option value="none" selected disabled hidden>Hi {username}!</option>
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
