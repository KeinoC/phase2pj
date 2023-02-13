import { NavLink, useNavigate  } from "react-router-dom";

function Nav() {

	const history = useNavigate();

	function handleCartClick(e) {
		history.push("/cart");
	}

	return (
		<div>
			<NavLink to="/" style={{ marginRight: "10px" }}>Home</NavLink>
			<NavLink to="/cart" onClick={handleCartClick} style={{ marginRight: "10px" }}>Cart</NavLink>
			<NavLink to="/login" style={{ marginRight: "10px" }}>Login</NavLink>
		</div>
	);
}

export default Nav;
