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
                <select onChange={handleLogOut}>
                    <option value="user">{username}</option>
                    <option value="logout" style={{ marginRight: "10px" }}>
                        Log out
                    </option>
                    {/* <option onClick={handleLogOut} style={{ marginRight: "10px" }}>Log out</option> */}
                </select>
            ) : (
                <NavLink to="/login" style={{ marginRight: "10px" }}>
                    Log In
                </NavLink>
            )}

            {isLoggedIn ? (
                <NavLink
                    to="/cart"
                    onClick={handleCartClick}
                    style={{ marginRight: "10px" }}
                >
                    Cart
                </NavLink>
            ) : null}
        </div>
    );
}

export default Nav;
