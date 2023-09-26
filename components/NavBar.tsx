"use client";

import Link from "next/link";
import Image from "next/image";

import React from "react";

const NavBar = () => {
	return (
		<div className="flex max-w-sm text-black w-full gap-5 flex-col bg-white shadow-md p-5 justify-between">
			<div>
				<Image
					src="/assets/hospital.png"
					alt="logo"
					width={50}
					height={50}
					className="mb-5"
				/>
				<div className="flex flex-col gap-5">
					<Link href="/login">Log In</Link>
					<Link href="/signup">Sign up</Link>
					<Link href="/doctor/1">Doctor1</Link>
					<Link href="/nurse/1">Nurse</Link>
				</div>
			</div>

			<div className="">Setting</div>
		</div>
	);
};

export default NavBar;
