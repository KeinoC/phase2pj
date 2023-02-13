import { NavLink, useNavigate  } from "react-router-dom";

function Nav() {

	const history = useNavigate();

	function handleCartClick(e) {
		history.push("/cart");
	}

	return (
		<div>
			<NavLink exact to="/" style={{ marginRight: "10px" }}>Home</NavLink>
			<NavLink exact to="/gallery" style={{ marginRight: "10px" }}>Gallery</NavLink>
			<NavLink exact to="/cart" onClick={handleCartClick} style={{ marginRight: "10px" }}>Cart</NavLink>
			<NavLink exact to="/login" style={{ marginRight: "10px" }}>Login</NavLink>
		</div>
	);
}

export default Nav;
