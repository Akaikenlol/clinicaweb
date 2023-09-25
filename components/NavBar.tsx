import Link from "next/link";

import React from "react";

const NavBar = () => {
	return (
		<div>
			<Link href="/login">Log In</Link>
			<Link href="/signup">Sign up</Link>
			<Link href="/doctor/1">Doctor1</Link>
			<Link href="/nurse/1">Nurse</Link>
		</div>
	);
};

export default NavBar;
