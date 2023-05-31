import React from "react";
import { withProtected } from "../src/hook/route";

function Admin({ auth }) {
	const { logout } = auth;
	return (
		<>
			<button onClick={logout}>Logout</button>
			
		</>
	);
}

export default withProtected(Admin);
