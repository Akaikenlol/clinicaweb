"use client";

import Link from "next/link";
import Image from "next/image";

import React from "react";
import { Button } from "./ui/button";
import { pb } from "@/helper";
import { usePocket } from "@/providers/pocket-provider";
import { useRouter } from "next/navigation";
import { useModal } from "@/providers/modal-provider";

const NavBar = () => {
	//@ts-ignore
	const { logout } = usePocket();
	const router = useRouter();
	//@ts-ignore
	const { setIsOpen } = useModal();

	const routes = [
		{ href: "/doctor/1", label: "Doctor" },
		{ href: "/nurse/1", label: "Nurse" },
		{ href: "/signup", label: "Sign Up" },
		{ href: "/login", label: "Login" },
	];

	return (
		<div className="flex flex-col justify-between w-full max-w-[300px] gap-5 p-5 text-black bg-white border-r">
			<div className="flex flex-col">
				<p className="self-center mb-10 text-3xl">Logo</p>
				{/* <Image
					src="/assets/hospital.png"
					alt="logo"
					width={50}
					height={50}
					className="mb-5"
				/> */}
				<div className="flex flex-col gap-5">
					{routes.map((route) => (
						<Button
							key={route.href}
							onClick={() => router.push(route.href)}
							className="justify-start bg-white text-primary hover:bg-primary hover:text-white">
							{route.label}
						</Button>
					))}
				</div>
			</div>

			<div className="">
				<Button onClick={() => setIsOpen(true)}>Logout</Button>
			</div>
		</div>
	);
};

export default NavBar;
