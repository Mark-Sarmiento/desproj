import React from "react";
import { withProtected } from "../src/hook/route";
import Layout from "@/src/components/Layout";

function Admin({ auth }) {
	const { logout } = auth;
	return (
		<>
			<div className="">
			<button className='' onClick={logout}>Logout</button>

			</div>
			
		</>
	);
}

export default withProtected(Admin);
