import React, { useState } from "react";

////setting state for if user is logged in or not

function UserPage() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<div>
			<div>I'm User Page!</div>
		</div>
	);
}

export default UserPage;
